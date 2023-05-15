import Home from './../pages/home/Home';
import User from './../pages/user/User';
import NotFound from './../pages/common/NotFound';

const commonRoutes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
];


export default commonRoutes;
