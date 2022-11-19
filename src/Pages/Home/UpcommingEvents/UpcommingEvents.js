import React from 'react';
import './UpcommingEvents.css'
const UpcommingEvents = () => {
    const UCdata = [
        {
            name: "Roundtable discussion on STEAM education"
        },
        {
            name: "Autumn Science Lectures"
        },
        {
            name: "Positive Psychology"
        }
    ]
    return (
        <div className='px-5 md:px-20 xl:px-52 py-20'>
            <div className='md:flex flex-col md:flex-row items-center justify-between my-11'>
                <div>
                    <h2 className='text-2xl font-bold text-regal-orange'>EVENTS LISTING</h2>
                    <h3 className='font-bold text-3xl pb-2'>Upcoming Events Schedule</h3>
                </div>
                <h3 className='border border-black mt-3 md:mt-0 w-32 flex items-center justify-center h-7 font-semibold'>See all</h3>
            </div>
            <div className='flex flex-col  items-center md:flex-row gap-5 relative '>
                <div className='w-full'>
                    <img className='w-full h-56 md:h-96 upcommingImg' src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061__340.jpg" alt="" />
                    <div className='absolute top-7 left-7 bg-white h-20 w-20 shadow-lg rounded-lg flex items-center justify-center flex-col'>
                        <h3 className='text-4xl font-bold text-regal-orange'>30</h3>
                        <p className='-mt-1'>Sep</p>
                    </div>
                </div>
                <div className='w-full'>
                    {
                        UCdata.map((data, i) =>
                            <div key={i} className='flex gap-3 py-6 border-b border-gray-300'>
                                <div className='border border-regal-orange upCommingDate flex items-center justify-center flex-col'>
                                    <h3 className='text-2xl font-bold text-regal-orange  '>30</h3>
                                    <p className='text-sm -mt-1'>Sep</p>
                                </div>
                                <div className='UpCommingTime'>
                                    <h1 className='text-lg hover:text-regal-orange ease-in-out duration-500'>{data.name}</h1>
                                    <div className='md:flex flex-col md:flex-row items-center text-base  text-gray-400'>
                                        <h3 className='pr-3'><i className="pr-2 fa-regular fa-clock text-regal-orange"></i> 08:00 - 17:00</h3>
                                        <h3><i className="pr-2 fa-solid fa-location-dot text-regal-orange"></i> NewYourk, USA</h3>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                    <div className='flex items-center mt-5'>
                        <p className='px-2 py-1 bg-regal-orange text-white rounded-lg mr-2'><i className="fa-solid fa-angles-right"></i></p>
                        <h3 className='text-semibold hover:text-regal-orange ease-in-out duration-500'>SEE DETAILS</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcommingEvents;