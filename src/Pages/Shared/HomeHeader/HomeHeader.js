import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHeader.css';

const HomeHeader = () => {
    return (
        <div className='homeHeader sm:px-20 md:px-32 lg:px-40 flex flex-col lg:flex-row px-7 py-2 items-center justify-center text-white'>
            <div className='flex items-center lg:pr-16 justify-center md:justify-start'>
                <Link className='bg-orange-400 px-3  py-2 rounded flex items-center mr-2 font-semibold hover:bg-white hover:text-orange-400 ease-in duration-300 cursor-pointer'><button>Admission</button></Link>
                <Link className='bg-orange-400 px-5 rounded py-2 font-semibold hover:bg-white hover:text-orange-400 ease-in duration-300 cursor-pointer'><button>Payment</button></Link>
            </div>
            <div className='py-2 lg:py-0'>
                <div className=' flex items-center md:pt-0'>
                    <div className='md:flex items-center pr-7 hidden '>
                        <i className=" fa-solid fa-bullhorn pr-3"></i>
                        <h3 className=' font-bold '>Announcement</h3>
                    </div>
                    <marquee behavior="scrool" direction="">Bangladesh is a Beautiful country in all over the world. We live in bangladesh in my childhood . And it is true that this is our Mother land</marquee>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;