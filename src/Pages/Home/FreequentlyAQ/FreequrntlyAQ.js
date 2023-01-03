import React from 'react';
import ScrollToTop from '../../../hooks/Scrool-to-top';
import './FreequentlyAQ.css'

const FreequrntlyAQ = () => {
    return (
        <div className='freeQuently my-11'>
            <ScrollToTop />
            <section class="freeAQbg dark:bg-gray-900">
                <div class="container flex flex-col px-6 lg:px-32 xl:px-52 py-11 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center gap-9">
                    {/* <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                                Easiest way to create your website
                            </h1>

                            <div class="mt-8 space-y-5">
                                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">Clean and Simple Layout</span>
                                </p>

                                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">Just Copy Paste Codeing</span>
                                </p>

                                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">Easy to Use</span>
                                </p>
                            </div>
                        </div>

                        <div class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                            <form class="flex flex-col lg:flex-row">
                                <input type="email" placeholder="Enter your email address" class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                                <button type="button" class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                                    Join Us
                                </button>
                            </form>
                        </div>
                    </div> */}
                    <div className='mt-5 w-full'>
                        <div>
                            <h3 className='text-xl font-semibold text-regal-orange pb-5 uppercase'>Faquality ask question</h3>
                            <h1 className='text-3xl font-semibold text-white'>Some FAQ's</h1>
                            <div className='flex items-center gap-3 py-5'>
                                <p className='h-1 w-16 bg-white'></p>
                                <i className="fa-solid fa-graduation-cap text-white"></i>
                                <p className='h-1 w-16 bg-white'></p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-regal-orange bg-transparent rounded mb-3">
                            <div className="collapse-title text-xl font-medium text-white">
                                Focus me to see content
                            </div>
                            <div className="collapse-content text-white">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-regal-orange bg-transparent rounded mb-3">
                            <div className="collapse-title text-xl font-medium text-white">
                                Focus me to see content
                            </div>
                            <div className="collapse-content text-white">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-regal-orange bg-transparent rounded mb-3">
                            <div className="collapse-title text-xl font-medium text-white">
                                Focus me to see content
                            </div>
                            <div className="collapse-content text-white">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full h-64 md:h-96 relative">
                        <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVuaXZlcnNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="glasses photo" />
                        <div className='bg-white p-3 rounded-full absolute  top-38 ring-4 ring-gray-300 cursor-pointer'>
                            <i className="fa-regular text-3xl lg:text-6xl fa-circle-play"></i>
                        </div>
                    </div>
                </div>
            </section >
            {/* <div className='flex items-center flex-col md:flex-row gap-7 md:gap-0 '>
                <div class="relative overflow-hidden bg-no-repeat bg-cover w-full h-full">
                    <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" class="w-full h-full" alt="Louvre" />
                    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-50 bg-indigo-700"></div>
                </div>
                <div className='w-full md:p-12 p-5 h-full freeAQbg'>
                    <h3 className='text-xl font-semibold text-regal-orange pb-5 uppercase'>Faquality ask question</h3>
                    <h1 className='text-3xl font-semibold text-white'>Some FAQ's</h1>
                    <div className='flex items-center gap-3 py-5'>
                        <p className='h-1 w-16 bg-white'></p>
                        <i className="fa-solid fa-graduation-cap text-white"></i>
                        <p className='h-1 w-16 bg-white'></p>
                    </div>
                    <div className='mt-5'>
                        <div tabIndex={0} className="collapse collapse-plus border border-regal-orange bg-transparent rounded mb-3">
                            <div className="collapse-title text-xl font-medium text-white">
                                Focus me to see content
                            </div>
                            <div className="collapse-content text-white">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-regal-orange bg-transparent rounded mb-3">
                            <div className="collapse-title text-xl font-medium text-white">
                                Focus me to see content
                            </div>
                            <div className="collapse-content text-white">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-regal-orange bg-transparent rounded mb-3">
                            <div className="collapse-title text-xl font-medium text-white">
                                Focus me to see content
                            </div>
                            <div className="collapse-content text-white">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div >
    );
};

export default FreequrntlyAQ;