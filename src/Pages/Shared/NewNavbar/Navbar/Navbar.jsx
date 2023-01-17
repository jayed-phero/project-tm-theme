import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";
import Logo from "../../NewNavbar/assets/Logo.png";
import logotm from '../../../../assets/logotm.png';
import NavLinks from "./NavLinks";
const Navbar = () => {
  // const [open, setOpen] = useState(false);

  const { user, logout, setOpen, open } = useContext(AuthContext)
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
    setOpen(!open)
  }

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate('/')
      })
  }
  return (
    <nav className={`shadow-lg z-50  w-full print:hidden ${nav && 'navbar-active ease-in duration-700'}`}>
      <div className="relative">
        <div className="flex items-center font-medium justify-between xl:px-52 px-6 md:px-20 lg:px-32">
          <div className="z-50 py-4 md:py-5 md:w-auto w-full flex justify-between items-center">
            {/* <img src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
            <h3 className="font-bold text-2xl md:text-3xl"><i class="fa-solid fa-graduation-cap text-regal-orange font-bold text-4xl"></i> TMKMT</h3>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden items-center gap-5 font-[Poppins]">
            <li>
              <Link to="/" className=" px-3 inline-block hover:text-regal-orange">
                Home
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link to="/admission" className=" px-3 inline-block hover:text-regal-orange">
                Admission
              </Link>
            </li>
            <li>
              <a href="#blogs" className=" px-3 inline-block hover:text-regal-orange">
                Blogs
              </a>
            </li>
            <li>
              <Link to="/dashboard" className=" px-3 inline-block hover:text-regal-orange">
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="md:block hidden">
            {
              user?.uid ?
                <Link onClick={handleLogout}
                  className='bg-regal-orange border-2 border-regal-orange hidden md:block text-white font-semibold px-5 hover:bg-blue-600 lg:px-11 py-2 rounded'
                >
                  Logout
                </Link>
                :
                <Link to='/loginpage'
                  className='bg-regal-orange border-2 border-regal-orange hidden md:block text-white font-semibold px-5 hover:bg-blue-600 lg:px-11 py-2 rounded'
                >
                  Sign In
                </Link>
            }
          </div>

          {/* Mobile nav */}

          <ul
            className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-9 z-50 px-4
        duration-500 ${open ? "left-0 w-72" : "left-[-100%]"}
        `}
          >
            <div className="flex items-center justify-between mb-7">
              <h3 className="text-semibold text-xl"><i class="fa-solid fa-graduation-cap text-regal-orange font-semibold text-2xl"></i> TMKMT</h3>
              <img src={logotm} className='h-11 w-11 rounded-full' alt="" />
              {/* <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div> */}
            </div>
            <li>
              <Link onClick={menuToggle} to="/" className="my-1.5 border border-regal-orange py-1.5 w-full px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks menuToggle={menuToggle} />
            <li>
              <Link onClick={menuToggle} to="/admission" className="my-1.5 border border-regal-orange py-1.5 w-full px-3 inline-block">
                Admission
              </Link>
            </li>
            <li>
              <a onClick={menuToggle} href='#blogs' className=" my-1.5 border border-regal-orange py-1.5 w-full px-3 inline-block">
                Blogs
              </a>
            </li>
            <li>
              <Link onClick={menuToggle} to="/dashboard" className=" my-1.5 border border-regal-orange py-1.5 w-full px-3 inline-block">
                Dashboard
              </Link>
            </li>
            <div onClick={menuToggle} className="py-5">
              {
                user?.uid ?
                  <h3 onClick={handleLogout}
                    className='bg-regal-orange border-2 border-regal-orange md:block text-white font-semibold px-5 w-full hover:bg-blue-400 py-2 rounded'
                  >
                    Logout
                  </h3>

                  :
                  <Link to='/loginpage'
                    className='bg-regal-orange border-2 border-regal-orange md:block text-white font-semibold px-5 w-full hover:bg-blue-400 py-2 rounded'
                  >
                    Sign In
                  </Link>
              }
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
