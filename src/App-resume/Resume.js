import React from 'react';
import { Link } from 'react-router-dom';
import './Resume.css'

const Resume = () => {

    return (
        <div className='resume border-2 border-gray-500 shadow-xl p-11 text-black'>
            <div className='text-center'>
                <h3 className='text-3xl font-semibold pb-3'>MD JAYEDUL ISLAM</h3>
                <h1 className='text-xl pb-1'>Full Stack Web Developer Specialized in MERN stack</h1></div>
            <div className='flex items-center justify-center gap-3 text-sm'>
                <p>
                    <i class="fa-solid pr-1 fa-location-dot"></i>
                    Dhaka, Bangladesh
                </p>
                <p>
                    <i class="fa-solid pr-1 fa-phone-flip"></i>
                    +8801954057920
                </p>
                <p>
                    <i class="fa-regular pr-1 fa-envelope"></i>
                    jayedkhanoficial@gmail.com
                </p>
            </div>

            <div className='flex items-center justify-center gap-5 mt-3 border-b-2 border-gray-300  pb-3'>
                <div className='border-2 border-gray-300 rounded-2xl w-48 h-7'>
                    <Link><i class="pr-1 fa-brands fa-github"></i>/jayed-phero</Link>
                </div>
                <div className='border-2 border-gray-300 rounded-2xl w-48 h-7'>
                    <Link><i class="fa-brands fa-linkedin pr-1"></i> /muhammad-jayed</Link>
                </div>
                <div className='border-2 border-gray-300  rounded-2xl w-48 h-7'>
                    <Link> <i class="pr-1 fa-solid fa-globe"></i>/muhammad-jayed</Link>
                </div>
            </div>

            <div className='mt-5'>
                <div className='mb-3'>
                    <div className='flex items-center gap-3'>
                        <h3 className='font-semibold text-xl'>Featured Project ||</h3>
                        <h3 className='font-semibold'>Educational Website TMKMT</h3>
                    </div>
                    <div className='flex items-center gap-3 text-sm'>
                        <p className='bg-gray-200 px-2 py-1'>React.js</p>
                        <p className='bg-gray-200 px-2 py-1'>node.js</p>
                        <p className='bg-gray-200 px-2 py-1'>MongoDB</p>
                        <p className='bg-gray-200 px-2 py-1'>express</p>
                        <p className='bg-gray-200 px-2 py-1'>Tailwind CSS</p>
                    </div>
                    <div className='pt-3 text-sm'>
                        <p> It's an educational website and there is a huge interactive platform to present various information for different types of people: future students, current students, teachers, parents, those who want to get a new profession, etc. All the sections have to be well-balanced and organized so users can easily find everything they need.</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <h3>Project Links: </h3>
                        <div className='flex items-center gap-3 text-regal-orange'>
                            <p>Client site</p>
                            <p>Server site</p>
                            <p>Live demo</p>
                        </div>
                    </div>
                    <h3 className='text-lg font-semibold pb-2 '>Important Features</h3>
                    <div className='pl-7 text-sm border-b-2 border-gray-300 pb-3'>
                        <p><i className=" fa-solid fa-circle text-sm  pr-3"></i>Maintaining conditionally user-based features and option adding and showing data on UI </p>
                        <p><i className=" fa-solid fa-circle text-sm   pr-3"></i>The most challenging is to show users' comments lively and get comments subject-wise. </p>
                        <p><i className=" fa-solid fa-circle text-sm   pr-3"></i>Using react.js most popular and recent libraries to give a well-designed interface.</p>

                    </div>
                </div>
                <div className='mb-3'>
                    <div className=''>
                        <h3 className='font-semibold'> mobileZONE E-Commerce Platform</h3>
                    </div>
                    <div className='flex items-center gap-3 text-sm'>
                        <p className='bg-gray-200 px-2 py-1'>React.js</p>
                        <p className='bg-gray-200 px-2 py-1'>node.js</p>
                        <p className='bg-gray-200 px-2 py-1'>MongoDB</p>
                        <p className='bg-gray-200 px-2 py-1'>firebase</p>
                        <p className='bg-gray-200 px-2 py-1'>jsonwebtoken</p>
                        <p className='bg-gray-200 px-2 py-1'>express</p>
                        <p className='bg-gray-200 px-2 py-1'>Tailwind CSS</p>
                    </div>
                    <div className='pt-3 text-sm'>
                        <p> This is E-commerce Website. It allows people to buy and sell their used mobile phones, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, the most important feature used here such as orders, accepting payments, managing shipping and logistics, and providing customer service.</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <h3>Project Links: </h3>
                        <div className='flex items-center gap-3 text-regal-orange'>
                            <p>Client site</p>
                            <p>Server site</p>
                            <p>Live demo</p>
                        </div>
                    </div>
                    <h3 className='text-lg font-semibold pb-2'>Important Features</h3>
                    <div className='pl-7 text-sm border-b-2 border-gray-300 pb-3'>
                        <p><i className=" fa-solid fa-circle text-sm  pr-3"></i>Advertising products on the user interface conditionally based on seller advertising. </p>
                        <p><i className=" fa-solid fa-circle text-sm   pr-3"></i> The special command was used to prevent the server is running but didn't providing data. </p>
                        <p><i className=" fa-solid fa-circle text-sm   pr-3"></i>In the payment section using the stripe payment method is the most challenging feature.</p>

                    </div>
                </div>
                <div>
                    <div className="flex items-center">
                        <h3 className='text-xl font-semibold pr-3'>Skills & Tools ||</h3>
                        <h3>Language</h3>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center gap-5'>
                            <h3>Font-End :</h3>
                            <div className='flex items-center gap-3'>
                                <p>html</p>
                                <p>css</p>
                                <p>javascript</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <h3>Back-End :</h3>
                            <div className='flex items-center gap-3'>
                                <p>node.js</p>
                                <p>NoSQL</p>
                                <p>javascript</p>
                            </div>
                        </div>
                    </div>
                    <h3>Technologies :</h3>
                    <div className='flex items-center gap-5'>
                        <h3>UI Releted :</h3>
                        <div className='flex items-center gap-3'>
                            <p>Meraki Ui</p>
                            <p>Bootstrap 5</p>
                            <p>TailwindCSS</p>
                            <p>Tailwind UI</p>
                            <p>daisiUI</p>
                            <p>Mamba UI</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;