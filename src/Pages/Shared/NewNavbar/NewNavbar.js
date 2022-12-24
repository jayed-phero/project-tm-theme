import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const NewNavbar = () => {
    const [isOpen, setOpen] = useState(false)

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

    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/')
            })
    }
    return (
        <div className={`shadow-lg z-50 px-6 py-3 w-full xl:px-52 print:hidden ${nav && 'navbar-active ease-in duration-700'}`}>
            <nav class="container  lg:flex lg:justify-between lg:items-center">
                <div class="flex items-center justify-between">
                    <div>
                        <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                    </div>

                    {/* <!-- Mobile menu button --> */}
                    <div class="flex lg:hidden">
                        <button onClick={() => setOpen(!isOpen)} type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            {
                                isOpen ?
                                    <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    :
                                    <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                            }
                        </button>
                    </div>
                </div>

                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" -- > */}
                <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'}`}>
                    <div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
                        <a class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Home</a>
                        <a class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Components</a>
                        <a class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Pricing</a>
                        <a class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Contact</a>
                        <a class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">FAQ</a>
                    </div>

                    <a class="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-300 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto" href="#">
                        Contact Us
                    </a>
                </div>
            </nav >

        </div >
    );
};

export default NewNavbar;