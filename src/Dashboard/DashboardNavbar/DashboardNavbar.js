import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import ScrollToTop from '../../hooks/Scrool-to-top';

const DashboardNavbar = () => {
    const {user, logout} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        .then(() => {
             navigate('/')
        })
    }
    return (
        <div className=''>
            <ScrollToTop/>
            <div className="navbar bg-base-100 shadow-lg">
                <div className="flex-1">
                    <label htmlFor="my-drawer-2" className="btn btn-ghost btn-circle lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <h3 className="text-semibold text-xl"><i class="fa-solid fa-graduation-cap text-regal-orange font-semibold text-2xl"></i> TMKMT</h3>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered hidden lg:block" />
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;