import { Navigate } from 'react-router-dom';
import Login from './../pages/auth/Login';
import Register from './../pages/auth/Register';
import Forgot from './../pages/auth/forgot_password/Forgot';

let isLogin = false;
sessionStorage.getItem('token') ? isLogin = true : isLogin = false;


const authRoutes = [
    {
        path: "/user/register",
        element: isLogin ? <Navigate to="/" /> : <Register />,
    },
    {
        path: "/user/login",
        element: isLogin ? <Navigate to="/" /> : <Login />,
    },
    {
        path: "/user/forgot",
        element: isLogin ? <Navigate to="/" /> : <Forgot />,
    },
];


export default authRoutes;
