import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SingleNews from "../pages/SingleNews/SingleNews";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Root from "../layout/Root";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/news.json'),
            },
            {
                path: '/news/:id', 
                element:<PrivateRoute><SingleNews></SingleNews></PrivateRoute>,
                loader: () => fetch('/public/news.json'),
            },

            {
                path: "/logins",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
]);
export default router;