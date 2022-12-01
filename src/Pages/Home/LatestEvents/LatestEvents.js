import React from 'react';
import './LatestEvents.css'

const LatestEvents = () => {
    const jsonData = [
        {
            name: "name"
        },
        {
            name: "name"
        }
    ]
    return (

        <section class="bg-white dark:bg-gray-900 ">
            <div class="relative flex">
                <div class="min-h-screen lg:w-1/3"></div>
                <div class="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>
                <div
                    class="container flex flex-col justify-center w-full min-h-screen px-5 lg:px-20 py-20 mx-auto lg:absolute lg:inset-x-0">
                    <div className=''>
                        <div className=''>
                            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                                Upcoming<span class="text-blue-500"> Events</span>
                            </h1> 
                            <p class="max-w-lg my-3 text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                tempora doloribus
                            </p>
                        </div>
                    </div>

                    <div class="mt-10 lg:mt-20 lg:flex lg:items-starts lg:flex-revarse gap-11">
                        <div className='relative w-full'>
                            <img class="object-cover object-center w-full rounded-lg h-64 lg:h-96 mb-7 lg:mb-0" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                            <div className='absolute top-7 left-7 bg-white h-20 w-20 shadow-lg rounded-lg flex items-center justify-center flex-col'>
                                <h3 className='text-4xl font-bold text-regal-orange'>30</h3>
                                <p className='-mt-1 text-black'>Sep</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-9 w-full'>
                            {
                                jsonData.map(data =>
                                    <div className='flex flex-col md:flex-row gap-7'>
                                        <img
                                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                            alt=""
                                            className='lg:h-36 lg:w-36 h-40 w-full rounded-xl'
                                        />
                                        <div class="">
                                            <h1 class="text-2xl font-semibold text-gray-800 dark:text-white ">
                                                Help us improve our productivity dolor sit
                                            </h1>

                                            <p class="max-w-lg my-3 text-gray-500 dark:text-gray-400">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                                tempora doloribus
                                            </p>
                                            <p class="text-gray-500 dark:text-gray-300">17 Decem 2022</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestEvents;