import React from 'react';
import './BlogPage.css';

const EventRow = ({ event }) => {
    return (
        <div>
            <div className='border-b-2 border-gray-100 pb-5 relative'>
                {/* <div className=' bg-white h-20 w-20 rounded-full flex flex-col shadow-xl items-center justify-center absolute top-5 left-5'>
                    <h1 className='font-extrabold text-orange-400 text-3xl'>25</h1>
                    <p className='text-sm'>Sep</p>
                </div> */}
                <div className=''>
                    <img className='h-56 w-full' src={event.image} alt="" />
                    <div className='blogPost p-5 hover:bg-white'>
                        <div className=''>
                            <p className='text-sm pb-2'>13th March 2022</p>
                            <h3 className='text-xl font-bold pb-3'>Education breeds confidence. Confidence breeds hope.</h3>
                            <h3 className='text-gray-400'>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</h3>
                            <div className='flex items-center text-sm gap-4 pt-3'>
                                <p ><i className=" pr-2 fa-solid fa-user text-regal-orange"></i> Admin</p>
                                <p> <i className="pr-2  fa-solid fa-comments  text-regal-orange "></i>Comments</p>
                            </div>
                        </div>
                        <button className='px-5 py-2 border-2 border-regal-orange rounded-3xl mt-5 hover:bg-black font-semibold hover:text-white text-regal-orange'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventRow;