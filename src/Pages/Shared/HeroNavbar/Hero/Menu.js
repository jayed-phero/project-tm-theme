import React from 'react';
import { Link } from 'react-router-dom';
import './HeroNavbar.css';

const Menu = ({menuOpen}) => {
    const linksNames = [
        'Home',
        'About',
        'Service',
        'Blogs',
        'Contact'
    ]
    return (
        <ul className={`menuHero ${menuOpen && 'menu-open'}`}>
            {
                linksNames.map((link, i) => (
                    <li key={i}>
                        <Link>{link}</Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default Menu;