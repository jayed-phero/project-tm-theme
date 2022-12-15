import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import './HeroNavbar.css';
import Menu from './Menu';

const HeroNavbar = () => {
    const { user, logout } = useContext(AuthContext)
    const [menuOpen, setMenuOpen] = useState(false)
    const [nav, setNav] = useState(false)
    const navigate = useNavigate()

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

    const handleLogout = () => {
        logout()
        .then(() => {
            navigate('/')
        })
    }
    return (
        <div className={`shadow-lg navbarHero ${nav && 'navbar-active'}`}>
            <div className="containerHero px-5 lg:px-52 ">
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-3'>
                        <i className="text-3xl md:text-5xl text-regal-orange fa-solid fa-graduation-cap"></i>
                        <div>
                            <h3 className=' text-xl lg:text-2xl text-regal-orange'>TMKMT</h3>
                            <p>Univercity of TMKMT</p>
                        </div>
                    </div>
                </div>
                <Menu menuOpen={menuOpen}
                    menuToggle={menuToggle}
                />
                <div className="menu-btn">
                    <i className="fa-solid fa-bars" onClick={menuToggle}></i>
                </div>

                <div className='hidden md:block'>
                    {
                        user?.uid ?
                            // <div className="avatar online">
                            //     <div className="w-12 rounded-full">
                            //         <img src={user?.displayURL} />
                            //     </div>
                            // </div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow-xl menu menu-compact dropdown-content bg-regal-orange rounded-box w-52 text-white submanu">
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
                            :
                            <Link to='/loginpage'
                                className='hover:bg-regal-orange border-2 border-regal-orange text-regal-orange hover:text-white font-semibold px-5 lg:px-11 py-2 lg:py-3 rounded'
                            >
                                Sign In
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default HeroNavbar;