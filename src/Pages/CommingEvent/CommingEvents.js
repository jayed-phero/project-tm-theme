import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const CommingEvents = () => {

    const { data: eventsData = [], isLoading } = useQuery({
        queryKey: ['ucevents'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/ucevents`)
            .then(res => res.json())

    })
    return (
        <div className='xl:px-44 px-5 md:px-20 lg:px-32 py-11 md:py-16'>
            <div class="mt-6 md:flex md:items-center md:justify-between">
                <div>
                    <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                        Upcomming Events
                    </h1>

                    <p className='text-gray-500 mt-2'>Discover Your Perfect Program In Our Courses.</p>
                </div>

                <div class="mt-8 md:mt-0">
                    <Link><h3 className='font-medium '>Browse All<i class="ml-2 fa-solid fa-angle-right"></i></h3></Link>
                </div>
            </div>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-7  '>
                {
                    eventsData.map(event =>
                        <Link to={`eventdetails/${event._id}`}><div className='p-2.5 border rounded bg-white flex items-center gap-5 md:gap-7 shadow-xl hover:border-regal-orange'>
                            <img src={event.image} className='h-44 w-32 md:h-36 md:w-36 rounded' alt="" />
                            <div>
                                <div className='w-20 md:w-32 h-7 text-sm mb-2 rounded-2xl flex items-center justify-center bg-regal-orange text-white'>
                                    <h3>07 April</h3>
                                </div>
                                <h3 className='hidden md:block font-semibold my-2 text-lg'>{event.title.slice(0, 65)}...</h3>
                                <h3 className='md:hidden font-semibold my-2'>{event.title.slice(0, 45)}...</h3>
                                <div className='flex flex-col md:flex-row text-base text-gray-400 mt-3 md:items-center md:gap-5'>
                                    <h3 className=''><i className="pr-2 fa-regular fa-clock text-regal-orange"></i> 08:00 - 17:00</h3>
                                    <h3><i className="pr-2 fa-solid fa-location-dot text-regal-orange"></i> NewYourk, USA</h3>
                                </div>
                            </div>
                        </div></Link>
                    )
                }
            </div>
        </div>
    );
};

export default CommingEvents;