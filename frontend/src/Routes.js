import React, { Suspense } from 'react';
import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import Todo from './pages/todo/Todo';
import TodoHistory from './pages/todo/todo-history/TodoHistory';

const router = createBrowserRouter([
 {
  path: "/",
  element: <Home />,
 },
 {
  path: "/todo",
  element: <>
   <Suspense fallback={<h2>🌀 Loading...</h2>}>
    <Todo />
   </Suspense>
  </>
 },{
    path: "/todo-history",
    element: <TodoHistory />,
 }
]);

export default function Routes() {
 return (<>
  <RouterProvider router={router} />
 </>);
}
