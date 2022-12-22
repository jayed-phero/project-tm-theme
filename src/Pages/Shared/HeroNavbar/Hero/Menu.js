import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../../../hooks/Scrool-to-top';
import './HeroNavbar.css';

const Menu = ({ menuOpen, menuToggle, handleLogout, user }) => {
    // className={`menuHero ${menuOpen && 'm
    return (
        <ul className={`menuHero z-50 ${menuOpen && 'menu-open'}`} >
            <ScrollToTop/>
            <div className='flex justify-end '>
                <button className='text-xl text-black font-bold md:hidden border-2 border-regal-orange mt-5 px-2 py-1 rounded-lg' onClick={menuToggle}>X</button>
            </div>
            <div className="navbar-center hidden lg:flex menudaisiUI">
                <ul className="menu menu-horizontal p-0">
                    <Link to='/'><li><a>Home</a></li></Link>
                    <li tabIndex={0}>
                        <a>
                            About Us
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-3 bg-regal-orange w-64 shadow-xl rounded-lg submanu">
                            <li><a>Who We Are</a></li>
                            <li><a>Achievement</a></li>
                        </ul>
                    </li>
                    <li tabIndex={0}>
                        <a>
                            Users Corner
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-3 bg-regal-orange w-64 shadow-xl rounded-lg submanu">
                            <li><a>Users Login</a></li>
                            <li><a>Academic Result</a></li>
                            <li><a>Courses</a></li>
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </li>
                    <li><a>Faculties</a></li>
                    <li><a>Gallery</a></li>
                </ul>
            </div>
            <div className="navbar-start md:hidden menudaisiUIMini">
                <ul className="p-0 mb-3">
                    <Link to='/'><li onClick={menuToggle}><a>Home</a></li></Link>
                    <li onClick={menuToggle}><a>About Us</a> </li>
                    <li onClick={menuToggle}><a>Users Corner</a> </li>
                    <li onClick={menuToggle}><a>Faculties</a></li>
                    <li onClick={menuToggle}><a>Gallery</a></li>
                    <li onClick={menuToggle} className='mb-5'><a>Contact</a></li>
                    {
                        user?.uid ?
                            <li onClick={handleLogout}><a>Logout</a></li>
                            :
                            <Link onClick={menuToggle} to='/loginpage'
                                className='hover:bg-regal-orange logini border-2 border-regal-orange mt-11 text-regal-orange hover:text-white font-semibold px-5 lg:px-11 py-2 lg:py-3 rounded'
                            >
                                Sign In
                            </Link>
                    }
                </ul>
            </div>
        </ul>
    );
};

export default Menu;