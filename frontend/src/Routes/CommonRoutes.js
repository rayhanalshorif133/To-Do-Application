import React from 'react';
import { Navigate } from 'react-router-dom';
import NotFound from './../pages/common/NotFound';
import Home from './../pages/home/Home';


let isLogin = false;
sessionStorage.getItem('token') ? isLogin = true : isLogin = false;

const commonRoutes = [
    {
        path: "/",
        element: isLogin ? <Home /> : <Navigate to="/user/login" />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
];


export default commonRoutes;
