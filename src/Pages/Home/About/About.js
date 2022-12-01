import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='xl:px-52 py-20 px-5'>
            <div className='flex flex-col lg:flex-row items-center gap-12'>
                <div className='w-full'>
                    <h3 className='text-2xl text-regal-orange font-semibold'>ABOUT US</h3>
                    <h4 className='text-3xl font-semibold pt-3 pb-5'>Learn a new skills online on your time</h4>
                    <div className='text-lg text-thin text-gray-700'>
                        <p className='pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                    </div>
                    <h3 className='w-32 py-2 my-5 bg-regal-orange flex justify-center text-white '>READ MORE</h3>
                </div>
                <div className=''>
                    <div class="flex flex-col gap-8 ">
                        <div class="p-6 rounded-xl aboutFirst dark:border-gray-700 ">
                            <div class="md:flex md:items-start md:-mx-4">
                                <span class="inline-block p-5 text-regal-orange bg-orange-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span>

                                <div class="mt-4 md:mx-4 md:mt-0">
                                    <h1 class="text-2xl font-medium text-gray-700 capitalize dark:text-white">Key Of Success</h1>

                                    <p class="mt-3 text-gray-500 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="p-6  rounded-xl aboutSecond">
                            <div class="md:flex md:items-start md:-mx-4">
                                <span class="inline-block p-5 text-regal-orange bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </span>

                                <div class="mt-4 md:mx-4 md:mt-0">
                                    <h1 class="text-2xl font-medium text-white capitalize dark:text-white">Zero Configrations</h1>

                                    <p class="mt-3 text-gray-500 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="p-6 rounded-xl dark:border-gray-700 bg-regal-orange">
                            <div class="md:flex md:items-start md:-mx-4">
                                <span class="inline-block p-5 text-regal-orange bg-white rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                                </span>

                                <div class="mt-4 md:mx-4 md:mt-0 text-white">
                                    <h1 class="text-2xl font-medium capitalize dark:text-white">Our Principle</h1>

                                    <p class="mt-3 ">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;