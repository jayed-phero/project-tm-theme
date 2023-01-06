import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const HeroSideButton = () => {
    const { user, logout, menuToggle, setOpen, open } = useContext(AuthContext)
    return (
        <div className='fixed right-0 top-60 z-50'>
            <div onClick={() => setOpen(!open)} className='h-16 hover:bg-green-400 hover:text-white w-14 bg-white flex flex-col items-center justify-center rounded-lg mb-1.5 shadow-lg group cursor-pointer'>
                {
                    open ?
                        <i class="fa-solid fa-xmark group-hover:text-white text-green-400 text-lg"></i>
                        :
                        <i className="group-hover:text-white text-green-400 fa-solid fa-bars text-lg"></i>

                }
                <p className='text-sm font-semibold group-hover:text-white'>{open ? "Close" : "Menu"}</p>
            </div>
           <Link to='/studentprofile'><div className='h-16 hover:bg-orange-400 hover:text-white w-14 bg-white flex flex-col items-center justify-center rounded-lg mb-1.5 shadow-lg group cursor-pointer'>
                <i className="group-hover:text-white text-orange-400 fa-regular fa-user text-lg"></i>
                <p className='text-sm font-semibold group-hover:text-white'>Profile</p>
            </div></Link>
            <Link to='/'><div className='h-16 hover:bg-sky-400 hover:text-white w-14 bg-white flex flex-col items-center justify-center rounded-lg z-50 shadow-lg group'>
                <i class="group-hover:text-white text-sky-400 fa-solid fa-house text-lg"></i>
                <p className='text-sm font-semibold group-hover:text-white'>Home</p>
            </div></Link>
        </div >
    );
};

export default HeroSideButton;