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
        <div className={`navbarHero shadow-lg  ${nav && 'navbar-active'}`}>
            <div className="containerHero px-5 lg:px-52 ">
                <div className='flex items-center gap-5'>
                    <div className="menu-btn">
                        <i className="fa-solid fa-bars" onClick={menuToggle}></i>
                    </div>
                    <Link href="" className='brand text-black'> <i className="pr-3 text-regal-orange     fa-solid fa-graduation-cap"></i>Eduma</Link>
                </div>
                <Menu menuOpen={menuOpen}
                    menuToggle={menuToggle}
                />
                <div className='hiddden md:block'>
                    <Link to='/loginpage'
                        className='bg-regal-orange border-2 border-regal-orange text-white hover:bg-transparent hover:text-black font-semibold px-5 lg:px-11 py-2 lg:py-3 rounded'
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroNavbar;