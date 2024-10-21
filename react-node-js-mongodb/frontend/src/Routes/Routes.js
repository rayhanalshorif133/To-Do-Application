import React from 'react';
import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import authRoutes from './AuthRoutes';
import todoRoutes from './TodoRoutes.js';
import commonRoutes from './CommonRoutes.js';
import userRoutes from './UserRoutes';

var routes = [];

commonRoutes.forEach((route) => {
    routes.push(route);
});

userRoutes.forEach((route) => {
    routes.push(route);
});

authRoutes.forEach((route) => {
    routes.push(route);
});

todoRoutes.forEach((route) => {
    routes.push(route);
});


const router = createBrowserRouter(routes);

export default function Routes() {
 return (<>
  <RouterProvider router={router} />
 </>);
}
