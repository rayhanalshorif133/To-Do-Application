import React, { Suspense } from 'react';
import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import Todo from './pages/todo/Todo';
import TodoHistory from './pages/todo/todo-history/TodoHistory';
import NotFound from './pages/common/NotFound';

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
 },
 {
    path: "/todo-history",
    element: <TodoHistory />,
 },{
   path: "*",
   element: <NotFound />,
 }
]);

export default function Routes() {
 return (<>
  <RouterProvider router={router} />
 </>);
}
