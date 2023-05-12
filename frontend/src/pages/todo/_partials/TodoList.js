import React, { Suspense } from 'react';
import TodoCard from './Cards/TodoCard';

export default function TodoList(props) {


    const { todoData, fetchTodoData, setSelectedTodo } = props;

    return (
        <>
            <Suspense fallback={<h2>🌀 Loading...</h2>}>
                {todoData.map((item, index) => {
                    return (
                        <TodoCard key={index}
                            index={index} id={item._id} title={item.title}
                            fetchTodoData={fetchTodoData}
                            setSelectedTodo={setSelectedTodo}
                        />
                    )
                })}
            </Suspense>
        </>
    )
}
