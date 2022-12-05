import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroNavbar.css';
import Menu from './Menu';

const HeroNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [nav, setNav] = useState(false)

    useEffect(() => {
        function activateNav() {
            let scrollPosition = window.pageYOffset
            if (scrollPosition > 200) {
                setNav(true)
            }
            else if (scrollPosition < 10) {
                setNav(false)
            }
        }
        window.addEventListener("scroll", activateNav)
    }, [])

    const menuToggle = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div className={`shadow-lg navbarHero ${nav && 'navbar-active'}`}>
            <div className="containerHero px-5 lg:px-52 ">
                <div className='flex items-center gap-5'>
                    <div className="menu-btn">
                        <i className="fa-solid fa-bars" onClick={menuToggle}></i>
                    </div>
                    <div className='flex items-center gap-3'>
                        <i className=" text-5xl text-regal-orange fa-solid fa-graduation-cap"></i>
                        <div>
                            <h3 className='text-2xl text-regal-orange'>Eduma</h3>
                            <p>Univercity of Eduma</p>
                        </div>
                    </div>
                </div>
                <Menu menuOpen={menuOpen}
                    menuToggle={menuToggle}
                />
                <div className='hiddden md:block'>
                    <Link to='/loginpage'
                        className='hover:bg-regal-orange border-2 border-regal-orange text-regal-orange hover:text-white font-semibold px-5 lg:px-11 py-2 lg:py-3 rounded'
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroNavbar;