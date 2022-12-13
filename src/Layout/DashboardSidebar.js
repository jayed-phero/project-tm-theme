import { Sidebar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
    return (
        <div>
            <div className="w-fit">
                <div>
                    {/* <div className='mt-7'>
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
                                <Link to='/dashboard/addevent'> <li className='text-gray-300'><a>
                                    <i class="fa-solid fa-calendar-plus"></i>
                                    Add Event
                                </a></li></Link>
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
                        </div> */}
                </div>
                <Sidebar aria-label="Sidebar with multi-level dropdown example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                to='/dashboard'
                            >
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Collapse
                                label="Event"
                            >
                                <Sidebar.Item
                                >
                                    <Link to='/dashboard/eventsbyhost'>My Posted Events</Link>
                                </Sidebar.Item>
                                <Sidebar.Item
                                >
                                     <Link to='/dashboard/addevent'>Post Events</Link>
                                </Sidebar.Item>
                            </Sidebar.Collapse>
                            <Sidebar.Collapse
                                label="Blogs"
                            >
                                <Sidebar.Item
                                >
                                    <Link to='/dashboard/blogsbyhost'>My Posted Blogs</Link>
                                </Sidebar.Item>
                                <Sidebar.Item
                                >
                                     <Link to='/dashboard/addblog'>Blog Post</Link>
                                </Sidebar.Item>
                            </Sidebar.Collapse>
                            <Sidebar.Item
                                href="#"
                            >
                                Inbox
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                            >
                                Users
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                            >
                                Sign In
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                            >
                                Sign Up
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>
    );
};

export default DashboardSidebar;