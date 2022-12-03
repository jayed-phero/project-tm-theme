import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardNavbar from '../Dashboard/DashboardNavbar/DashboardNavbar';

const DashboardLayout = () => {
    return (
        <div>
            <DashboardNavbar />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content py-9 px-5">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-sky-900 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <div className='mt-7'>
                            <h3 className='text-white text-lg font-semibold'>Academics</h3>
                            <div className='py-2'>
                                <li className='text-gray-300'><a>
                                    <i class="fa-brands fa-elementor"></i>
                                    Comming
                                </a></li>
                                <li className='text-gray-300'><a>
                                    <i class="fa-solid fa-calendar-plus"></i>
                                    Comming
                                </a></li>
                            </div>
                        </div>
                        <div className='mt-7'>
                            <h3 className='text-white text-lg font-semibold'>
                                Event Section
                            </h3>
                            <div className='py-2'>
                                <Link to='/dashboard/eventsbyhost'><li className='text-gray-300'><a>
                                    <i class="fa-brands fa-elementor"></i>
                                    My Posted Event
                                </a></li></Link>
                                <li className='text-gray-300'><a>
                                    <i class="fa-solid fa-calendar-plus"></i>
                                    Add Event
                                </a></li>
                            </div>
                        </div>
                        <div className="mt-7 ">
                            <h3 className='text-white text-lg font-semibold'>Bloog Section</h3>
                            <div className='py-2'>
                                <li className='text-gray-300'><a>
                                    <i class="fa-brands fa-blogger"></i>
                                    My Bloogs
                                </a></li>
                                <li className='text-gray-300'><a>
                                    <i class="fa-brands fa-blogger-b"></i>
                                    Add Bloog
                                </a></li>
                            </div>
                        </div>
                        <div className='mt-7'>
                            <h3 className='text-white text-lg font-semibold'>
                                Gallery Section
                            </h3>
                            <div className='py-2'>
                                <li className='text-gray-300'><a>
                                    <i class="fa-solid fa-images"></i>
                                    Gallery Image
                                </a></li>
                                <li className='text-gray-300'><a>
                                    <i class="fa-solid fa-panorama"></i>
                                    Add Image
                                </a></li>
                            </div>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;