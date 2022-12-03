import { createBrowserRouter } from "react-router-dom";
import AllEventsForHost from "../Dashboard/AllEventsForHost/AllEventsForHost";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddEventt from "../Pages/AddEventt";
import Admission from "../Pages/Home/Admission/Admission";
import Events from "../Pages/Home/Events/Events";
import Home from "../Pages/Home/Home/Home";
import UEventDetails from "../Pages/Home/UpcommingEvents/UEventDetails";
import BecomeAHost from "../Pages/Login/BecomeAHost/BecomeAHost";
import HostLogin from "../Pages/Login/BecomeAHost/HostLogin";
import LoginPage from "../Pages/Login/LoginPage";
import StudentLogin from "../Pages/Login/StudentLogin/StudentLogin";
import Payment from "../Pages/Payment/Payment";
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
                path: 'payment',
                element: <Payment/>
            },
            {
                path: 'loginpage',
                element: <LoginPage/>
            },
            {
               path: '/studentlogin',
               element: <StudentLogin/>
            },
            {
                path: 'becomeahost',
                element: <BecomeAHost/>
            },
            {
                path: 'hostlogin',
                element: <HostLogin/>
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
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/dashboard/eventsbyhost',
                element: <AllEventsForHost/>
            },
            // {
            //     path: '/dashboard/my-posted-event',
            //     element: <AllEvent></AllEvent>
            // }
        ]
    }
])

export default routes;