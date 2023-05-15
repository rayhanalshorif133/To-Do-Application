import React from 'react';
import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import Todo from './pages/todo/Todo';
import TodoHistory from './pages/todo/todo-history/TodoHistory';
import NotFound from './pages/common/NotFound';
import Login from './pages/auth/Login';
import User from './pages/user/User';
import Register from './pages/auth/Register';

const router = createBrowserRouter([
 {
  path: "/",
  element: <Home />,
 },
 {
  path: "/user",
  element: <User />,
 },
 {
  path: "/user/register",
  element: <Register />,
 },
 {
  path: "/user/login",
  element: <Login />,
 },
 {
  path: "/todo",
  element:<Todo /> 
 },
 {
    path: "/todo-history",
    element: <TodoHistory />,
 },
 {
   path: "*",
   element: <NotFound />,
 }
]);

export default function Routes() {
 return (<>
  <RouterProvider router={router} />
 </>);
}
