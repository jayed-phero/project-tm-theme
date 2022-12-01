import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddEventt from "../Pages/AddEventt";
import Admission from "../Pages/Home/Admission/Admission";
import Events from "../Pages/Home/Events/Events";
import Home from "../Pages/Home/Home/Home";
import UEventDetails from "../Pages/Home/UpcommingEvents/UEventDetails";
import LoginPage from "../Pages/Login/LoginPage";
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
                path: 'loginpage',
                element: <LoginPage/>
            },
            {
                path: '/events',
                element: <Events></Events>
            },
            {
                path: '/eventdetails/:id',
                loader: ({ params }) => fetch(`http://localhost:8000/allevents/${params.id}`),
                element: <UEventDetails></UEventDetails>
            },
            {
                path: 'addevent',
                element: <AddEventt></AddEventt>
            },
        ]
    }
])

export default routes;