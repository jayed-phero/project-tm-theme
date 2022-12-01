import React from 'react';
import './ResBar.css';

const ResBar = () => {
    return (
        <div>
            <header className='resNavr'>
                <a href="" className='logo'>LOGO</a>
                <input type="checkbox" id='menu-bar' />
                <label htmlFor="menu-bar">Menu</label>
                <nav className="navbarRes">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">about</a></li>
                        <li><a href="">pages +</a>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">about</a>
                                    <ul>
                                        <li><a href="">Home</a></li>
                                        <li><a href="">about</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="">reviews</a></li>
                        <li><a href="">gallery +</a>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">about</a></li>
                            </ul>c
                        </li>
                        <li><a href="">contact</a></li>
                        <li><a href="">Home</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default ResBar;