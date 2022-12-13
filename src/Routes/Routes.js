import { createBrowserRouter } from "react-router-dom";
import AllEventsForHost from "../Dashboard/AllEventsForHost/AllEventsForHost";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddEventt from "../Dashboard/AddEvent/AddEventt";
import Admission from "../Pages/Home/Admission/Admission";
import Home from "../Pages/Home/Home/Home";
import UEventDetails from "../Pages/Home/UpcommingEvents/UEventDetails";
import BecomeAHost from "../Pages/Login/BecomeAHost/BecomeAHost";
import HostLogin from "../Pages/Login/BecomeAHost/HostLogin";
import LoginPage from "../Pages/Login/LoginPage";
import StudentLogin from "../Pages/Login/StudentLogin/StudentLogin";
import Payment from "../Pages/Payment/Payment";
import BloogDetails from "../Pages/Home/Events/BloogDetails";
import AddABlog from "../Dashboard/AddABlog/AddABlog";
import AllBlogForHost from "../Dashboard/AllBlogForHost/AllBlogForHost";
import Resume from "../App-resume/Resume";
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
                element: <Payment />
            },
            {
                path: 'loginpage',
                element: <LoginPage />
            },
            {
                path: '/studentlogin',
                element: <StudentLogin />
            },
            {
                path: 'becomeahost',
                element: <BecomeAHost />
            },
            {
                path: 'hostlogin',
                element: <HostLogin />
            },
            {
                path: '/blogdetails/:id',
                element: <BloogDetails />,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/detailsblog/${params.id}`)
            },
            {
                path: '/eventdetails/:id',
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/allevents/${params.id}`),
                element: <UEventDetails></UEventDetails>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/eventsbyhost',
                element: <AllEventsForHost />
            },
            {
                path: '/dashboard/addevent',
                element: <AddEventt></AddEventt>
            },
            {
                path: '/dashboard/addblog',
                element: <AddABlog/>
            },
            {
                path: '/dashboard/blogsbyhost',
                element: <AllBlogForHost/>
            },

        ]
    },
    {
        path: '/resume',
        element: <Resume/>
    }
])

export default routes;