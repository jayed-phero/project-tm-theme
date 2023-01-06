import { Sidebar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
    return (
        <div>
            <div className="w-fit">
                <Sidebar aria-label="Sidebar with multi-level dropdown example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item

                            >
                                <label htmlFor="my-drawer-2" className=""><Link to='/dashboard'>Dashboard</Link></label>
                                {/* <button htmlFor="my-drawer-2">Dashboard</button> */}
                                {/* <Link to='/dashboard'>Dashboard</Link> */}
                            </Sidebar.Item>
                            <Sidebar.Item

                            >
                                <Link to='/'>Home</Link>
                            </Sidebar.Item>
                            <Sidebar.Item
                            >
                                 <label htmlFor="my-drawer-2" className=""><Link to='/dashboard/studentdetails'>My Student</Link></label>
                                {/* <Link to='/dashboard/studentdetails'>My Student</Link> */}
                            </Sidebar.Item>
                            <Sidebar.Collapse
                                label="Event"
                            >
                                <Sidebar.Item
                                >
                                    <label htmlFor="my-drawer-2" className=""><Link to='/dashboard/eventsbyhost'>My Posted Events</Link></label>
                                    {/* <Link to='/dashboard/eventsbyhost'>My Posted Events</Link> */}
                                </Sidebar.Item>
                                <Sidebar.Item
                                >
                                    <label htmlFor="my-drawer-2" className=""> <Link to='/dashboard/addevent'>Post Events</Link></label>
                                    {/* <Link to='/dashboard/addevent'>Post Events</Link> */}
                                </Sidebar.Item>
                            </Sidebar.Collapse>
                            <Sidebar.Collapse
                                label="Blogs"
                            >
                                <Sidebar.Item
                                >
                                    <label htmlFor="my-drawer-2" className=""><Link to='/dashboard/blogsbyhost'>My Posted Blogs</Link></label>
                                    {/* <Link to='/dashboard/blogsbyhost'>My Posted Blogs</Link> */}
                                </Sidebar.Item>
                                <Sidebar.Item
                                >
                                    <label htmlFor="my-drawer-2" className=""><Link to='/dashboard/addblog'>Blog Post</Link></label>
                                    {/* <Link to='/dashboard/addblog'>Blog Post</Link> */}
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