import { createBrowserRouter } from "react-router-dom";
import AddEvent from "../Dashboard/AddUpcommingEvent/AddEvent";
import Welcome from "../Dashboard/Welcome";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddEventt from "../Pages/AddEventt";
import BecomeAHost from "../Pages/Dashboard/BecomeAHost";
import MySection from "../Pages/Dashboard/MySection";
import Admission from "../Pages/Home/Admission/Admission";
import Events from "../Pages/Home/Events/Events";
import Home from "../Pages/Home/Home/Home";
import UEventDetails from "../Pages/Home/UpcommingEvents/UEventDetails";
import Payment from "../Pages/Payment/Payment";
import Register from "../Pages/Register/Register";
import Signin from "../Pages/Register/Signin";
import PrivateRoutes from "./PrivateRoutes";
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
                path: '/eventdetails/:id',
                loader: ({ params }) => fetch(`http://localhost:8000/allevents/${params.id}`),
                element: <UEventDetails></UEventDetails>
            },
            {
                path: 'addevent',
                element: <AddEventt></AddEventt>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            }
        ]
    },
    {
        path: '/dashboard',
        element:
            <PrivateRoutes>
                <DashboardLayout />
            </PrivateRoutes>,
        children: [
            {
                path: '',
                element: <Welcome />
            },
            {
                path: '/dashboard/my-section',
                element: <MySection />
            },
            {
                path: '/dashboard/becomea-host',
                element: <BecomeAHost />
            }
        ]
    }
])

export default routes;