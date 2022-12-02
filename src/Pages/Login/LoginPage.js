import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'

const LoginPage = () => {
    return (
        // <div className='h-[35rem] w-full flex items-center justify-center'>
        //     <div className='flex items-center gap-5 flex-col md:flex-row'>
        //         <Link className='h-20 w-44 flex items-center justify-center  rounded-lg bg-orange-400 text-white font-semibold border-4 border-gray-500'>
        //             <h3>Users Login</h3>
        //         </Link>
        //         <Link className='h-20 w-44 flex items-center justify-center rounded-lg bg-orange-400 text-white font-semibold border-4 border-gray-500'>
        //             <h3>Employee Login</h3>
        //         </Link>
        //     </div>
        // </div> 
        <header class="bg-white dark:bg-gray-900 my-5">
            <div class="lg:flex items-center xl:px-52 md:px-20 lg:px-32 px-5">
                <div class="flex items-center justify-center w-full py-8 lg:h-[32rem] lg:w-1/2">
                    <div class="max-w-xl">
                        <h2 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Provide Identity and <span class="text-regal-orange dark:text-blue-400">Login</span></h2>

                        <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

                        <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                            <Link to='/studentlogin' class="block px-6 py-2.5 text-sm font-medium tracking-wider text-center text-white uppercase transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">User Login</Link>
                            <Link to='/becomeahost' class="block px-6 py-2.5 text-sm font-medium tracking-wider text-center text-gray-700 uppercase transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Become Host</Link>
                        </div>
                    </div>
                </div>

                <div class="w-full h-64 lg:w-1/2 lg:h-auto">
                    <div
                        class="grow-0 shrink-1 md:shrink-0 basis-auto md:mb-0"
                    >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="w-full"
                            alt="Sample image"
                        />
                    </div>
                </div>
            </div>
        </header >
    );
};

export default LoginPage;