import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TodoCard from './Cards/TodoCard';

export default function TodoList() {


    const [todo, setTodo] = useState([]);

    const [flag, setFlag] = useState(false);


    const fetchTodoData = async () => {
        await axios.get('http://localhost:3001/todo')
            .then(res => {
                if (res.status == 200) {
                    const { data } = res.data;
                    if (data.length > 0) {
                        setTodo(data);
                    }
                }
                setFlag(true);
            });
    };


    // UseEffect to handle input change
    useEffect(() => {
        fetchTodoData();
    }, [flag]);


    return (
        <>
            {todo.map((item, index) => {
                return (
                    <TodoCard key={index} title={item.title} description={item.description} />
                )
            })}
        </>
    )
}
