import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../NewNavbar/assets/Logo.png";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg print:hidden relative">
      <div className="flex items-center font-medium justify-between xl:px-52 ">
        <div className="z-50 py-5 md:w-auto w-full flex justify-between ">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
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
            <Link to="/" className=" px-3 inline-block hover:text-regal-orange">
              Admission
            </Link>
          </li>
          <li>
            <Link to="/" className=" px-3 inline-block hover:text-regal-orange">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/tmtsection" className=" px-3 inline-block hover:text-regal-orange">
              Dashboard
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Link to='/loginpage'
            className='bg-regal-orange border-2 border-regal-orange hidden md:block text-white font-semibold px-5 hover:bg-blue-600 lg:px-11 py-2 rounded'
          >
            Sign In
          </Link>
        </div>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Link to='/loginpage'
              className='bg-regal-orange border-2 border-regal-orange hidden md:block text-white font-semibold px-5 hover:bg-blue-400 lg:px-11 py-2 lg:py-3 rounded'
            >
              Sign In
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
