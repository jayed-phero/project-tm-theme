import React from 'react';
import { Link } from 'react-router-dom';
import './HeroNavbar.css';

const Menu = ({ menuOpen, menuToggle }) => {
    const linksNames = [
        'Home',
        'About',
        'Service',
        'Blogs',
        'Contact'
    ]
    // className={`menuHero ${menuOpen && 'menu-open'}`} 
    return (
        <ul className={`menuHero z-50 ${menuOpen && 'menu-open'}`} >
            <button className='text-xl text-black font-bold md:hidden' onClick={menuToggle}>X</button>
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
                        </ul>
                    </li>
                    <li><a>Faculties</a></li>
                    <li><a>Gallery</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </ul>
    );
};

export default Menu;