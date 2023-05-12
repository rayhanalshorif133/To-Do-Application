import React from 'react';
import TodoCard from './Cards/TodoCard';

export default function TodoList({ todoData }) {

    return (
        <>
            {todoData.map((item, index) => {
                return (
                    <TodoCard key={index} index={index} title={item.title} description={item.description} />
                )
            })}
        </>
    )
}
