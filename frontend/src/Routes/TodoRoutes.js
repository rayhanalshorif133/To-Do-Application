import { Navigate } from "react-router-dom";
import Todo from "../pages/todo/Todo";
import TodoHistory from "../pages/todo/todo-history/TodoHistory";

let isLogin = false;
sessionStorage.getItem('token') ? isLogin = true : isLogin = false;

const todoRoutes = [
    {
        path: "/todo",
        element: isLogin ? <Todo /> : <Navigate to="/user/login" />,
    },
    {
        path: "/todo-history",
        element: isLogin ? <TodoHistory /> : <Navigate to="/user/login" />,
    },
];


export default todoRoutes;
