import React, { useEffect, useState } from 'react'
import TodoCard from './Cards/TodoCard'
import axios from 'axios';

export default function TodoList() {


    const [todo, setTodo] = useState([{
        title: '',
        description: ''
    }]);


    const  fetchTodoData = () =>{

        await axios.get('http://localhost:3001/todo')
            .then(data => {
                setTodo({
                    ...todo,
                    data
                });
            });
            console.log(todo);
    };


    // UseEffect to handle input change
    useEffect(() => {
        fetchTodoData();
    });
    

 return (
  <>
   <TodoCard />
  </>
 )
}
