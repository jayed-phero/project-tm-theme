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
import Notice from "../Pages/Notice/Notice";
import NoticeDetails from "../Pages/Notice/NoticeDetails";
import CommingSoon from "../Pages/Shared/CommingSoon/CommingSoon";
import AdmissionNewForm from "../Pages/Home/Admission/AdmissionNewForm";
import PaymentDetails from "../Pages/Payment/PaymentDetails";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import PaymentFail from "../Pages/Payment/PaymentFail";
import DetailsCommingEvents from "../Pages/CommingEvent/DetailsCommingEvents";
import TeachersRegistrationTab from "../Pages/Login/TeachersRegister/TeachersRegistrationTab";
import SearchHost from "../Pages/Login/BecomeAHost/SearchHost";
import StudentProfile from "../Pages/Login/StudentLogin/StudentProfile";
import StudentForHost from "../Dashboard/StudentForHost/StudentForHost";
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
                path: 'employeesignup',
                element: <BecomeAHost />
            },
            {
                path: 'employeelogin',
                element: <HostLogin />
            },
            {
                path: 'notice',
                element: <Notice/>
            },
            {
                path: '/noticedetails/:id',
                element: <NoticeDetails/>
            },
            {
                path: 'commingsoon',
                element: <CommingSoon/>
            },
            {
                path: '/blogdetails/:id',
                element: <BloogDetails />,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/detailsblog/${params.id}`)
            },
            {
                path: '/eventdetails/:id',
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/allevents/${params.id}`),
                element: <DetailsCommingEvents/>
            },
            {
                path: '/eventpaymentinfo/:id',
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/allevents/${params.id}`),
                element: <PaymentDetails/>
            },
            {
                path: '/payment/success',
                element: <PaymentSuccess/>
            },
            {
                path: '/payment/fail',
                element: <PaymentFail/>
            },
            {
                path: '/tmtsection',
                element: <HostLogin/>
            },
            {
                path: '/employeesearch',
                element: <SearchHost/>
            },
            {
                path: 'studentprofile',
                element: <StudentProfile/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout /></PrivateRoutes> ,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoutes> <Dashboard /></PrivateRoutes> 
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
            {
                path: '/dashboard/studentdetails',
                element: <StudentForHost/>
            }

        ]
    },
    {
        path: '/resume',
        element: <Resume/>
    }
])

export default routes;