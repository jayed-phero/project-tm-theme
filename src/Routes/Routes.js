import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Admission from "../Pages/Home/Admission/Admission";
import Events from "../Pages/Home/Events/Events";
import Home from "../Pages/Home/Home/Home";
import UEventDetails from "../Pages/Home/UpcommingEvents/UEventDetails";
import Register from "../Pages/Register/Register";
import Signin from "../Pages/Register/Signin";
const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'admission',
                element: <Admission></Admission>
            },
            {
                path: '/events',
                element: <Events></Events>
            },
            {
                path: 'login',
                element: <Signin></Signin>
            },
            {
                path: 'signup',
                element: <Register></Register>
            },
            {
                path: '/eventdetails',
                element: <UEventDetails></UEventDetails>
            }
        ]
    }
])

export default routes;