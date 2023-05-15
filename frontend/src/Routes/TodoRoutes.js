import Todo from "../pages/todo/Todo";
import TodoHistory from "../pages/todo/todo-history/TodoHistory";

const todoRoutes = [
    {
        path: "/todo",
        element: <Todo />
    },
    {
        path: "/todo-history",
        element: <TodoHistory />,
    },
];


export default todoRoutes;
