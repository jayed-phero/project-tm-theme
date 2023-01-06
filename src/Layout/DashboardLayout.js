import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import DashboardNavbar from '../Dashboard/DashboardNavbar/DashboardNavbar';
import ScrollToTop from '../hooks/Scrool-to-top';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = () => {

    console.log("dashboard")
    const { user } = useContext(AuthContext)
    const [hostRole, setHostRole] = useState({})

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/hostrolesdata/${user?.email}`)
            .then(res => {
                console.log(res)
                setHostRole(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [user?.email])

    return (
        <div className=''>
            {
                hostRole?.role === "searched" ?
                    <div>
                        <ScrollToTop />
                        <DashboardNavbar />
                        <div className="drawer drawer-mobile">
                            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content py-7 px-5">
                                <Outlet />
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 bg-sky-900 text-base-content">

                                    <DashboardSidebar />
                                </ul>

                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex items-center justify-center min-h-screen'>
                        <h3 className='text-xl font-semibold text-center w-2/3 text-red-500'>You are not eligible to access this section...</h3>
                    </div>
            }
        </div>
    );
};

export default DashboardLayout;