import Register from './../pages/auth/Register';
import Login from './../pages/auth/Login';
import Forgot from './../pages/auth/Forgot';

const authRoutes =  [
    {
    path: "/user/register",
    element: <Register />,
   },
   {
    path: "/user/login",
    element: <Login />,
   },
   {
    path: "/user/forgot",
    element: <Forgot />,
   },
];


export default authRoutes;
