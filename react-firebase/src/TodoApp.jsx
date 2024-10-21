import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    doc,
    deleteDoc
} from "firebase/firestore";

export default function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");


    // Fetch tasks from Firestore
    const fetchTasks = async () => {
        const tasksCollection = await getDocs(collection(db, "tasks"));
        const tasksList = tasksCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTasks(tasksList);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Add new task to Firestore
    const addTask = async () => {
        if (newTask.trim()) {
            await addDoc(collection(db, "tasks"), { text: newTask, completed: false });
            setNewTask("");
            fetchTasks();
        }
    };

    // Update task in Firestore
    const updateTask = async (taskId, updatedText) => {
        const taskDoc = doc(db, "tasks", taskId);
        await updateDoc(taskDoc, { text: updatedText });
        setEditingId(null);
        setEditingText("");
        fetchTasks();
    };

    // Delete task from Firestore
    const deleteTask = async (taskId) => {
        const taskDoc = doc(db, "tasks", taskId);
        await deleteDoc(taskDoc);
        fetchTasks();
    };

    // Toggle task completion
    const toggleComplete = async (taskId, completed) => {
        const taskDoc = doc(db, "tasks", taskId);
        await updateDoc(taskDoc, { completed: !completed });
        fetchTasks();
    };


    return (
        <div>
            <h1>To-Do App</h1>

            <input
                type="text"
                placeholder="Add new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "" }}>
                        {editingId === task.id ? (
                            <input
                                type="text"
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                            />
                        ) : (
                            <span>{task.text}</span>
                        )}

                        <button onClick={() => toggleComplete(task.id, task.completed)}>
                            {task.completed ? "Undo" : "Complete"}
                        </button>

                        {editingId === task.id ? (
                            <button onClick={() => updateTask(task.id, editingText)}>Save</button>
                        ) : (
                            <button onClick={() => { setEditingId(task.id); setEditingText(task.text); }}>Edit</button>
                        )}

                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
