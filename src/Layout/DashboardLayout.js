import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';

const DashboardLayout = () => {
    return (
        <div className='md:flex min-h-screen'>
            <Sidebar/>
            <div className='flex-1 md:ml-64'>
                <div className="p-5">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;