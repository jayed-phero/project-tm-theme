import React, { useEffect, useState } from 'react';
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
        <div className={`navbarHero ${nav && 'navbar-active'}`}>
            <div className="containerHero">
                <a href="" className='brand'>BrandLogo</a>
                <Menu menuOpen={menuOpen} />
                <div className="menu-btn">
                    <i className="fa-solid fa-bars" onClick={menuToggle}></i>
                </div>
            </div>
        </div>
    );
};

export default HeroNavbar;