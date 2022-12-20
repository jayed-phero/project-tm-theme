import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UCHSkeleton from '../../Shared/Skeleton/UCHSkeleton';
import UCSkeleton from '../../Shared/Skeleton/UCSkeleton';
import './UpcommingEvents.css'
const UpcommingEvents = () => {

    const { data: eventsData = [], isLoading } = useQuery({
        queryKey: ['ucevents'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/ucevents`)
            .then(res => res.json())

    })

    return (
        <div className='px-5 md:px-20 xl:px-52 py-10 mb-10'>
            <div class="container px-6 py-5 mx-auto">
                <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Upcomming<span className='text-regal-orange'> Events</span></h1>
                <p class="max-w-2xl mx-auto mt-3 text-center text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>
                <div className='flex justify-center mx-auto items-center gap-3 py-5'>
                    <p className='h-1 w-16 bg-black'></p>
                    <i className="fa-solid fa-graduation-cap text-black"></i>
                    <p className='h-1 w-16 bg-black'></p>
                </div>
            </div>
            <div className='flex flex-col  items-center md:flex-row gap-7 relative '>
                <div className='w-full'>
                    {
                        isLoading ?
                        <UCHSkeleton/>
                        :
                        eventsData.slice(0, 1).map(event =>
                            <div key={event._id}>
                                <img className='w-full h-56 md:h-96 upcommingImg' src={event.image} alt="" />
                                <div className='absolute top-7 left-7 bg-white h-20 w-20 shadow-lg rounded-lg flex items-center justify-center flex-col'>
                                    <h3 className='text-4xl font-bold text-regal-orange'>30</h3>
                                    <p className='-mt-1'>Sep</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='w-full'>
                    {
                        isLoading ?
                        <UCSkeleton/>
                        :
                        eventsData.map((ucData) =>
                            <div key={ucData._id} className='flex gap-5 items-start py-5  border-b border-gray-300 border-b-gray-400 w-full'>
                                <div className=''>
                                    <div className='px-3 py-1 border-2 border-regal-orange text-center'>
                                        <h3 className='text-2xl font-semibold'>05</h3>
                                    </div>
                                    <div className='border-2 px-3 py-1 border-gray-300 text-center'>
                                        <p className='uppercase text-gray-500 '>Mar</p>
                                    </div>
                                </div>
                                <div className='UpCommingTime'>
                                    <Link to={`eventdetails/${ucData._id}`}>
                                        <h1 className='text-sm hover:text-regal-orange ease-in-out duration-500 uppercase'>{ucData.title.slice(0, 67)}</h1>
                                    </Link>
                                    <div className='flex flex-col text-base text-gray-400 mt-3'>
                                        {/* <div className='flex items-center gap-3'>
                                            <h3 className='pr-3'><i className="pr-2 fa-solid fa-calendar-days text-regal-orange"></i>31/12/22</h3> */}
                                        <h3 className=''><i className="pr-2 fa-regular fa-clock text-regal-orange"></i> 08:00 - 17:00</h3>
                                        {/* </div> */}
                                        <h3><i className="pr-2 fa-solid fa-location-dot text-regal-orange"></i> NewYourk, USA</h3>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                    {/* <div className='flex items-center mt-5'>
                        <p className='px-2 py-1 bg-regal-orange text-white rounded-lg mr-2'><i className="fa-solid fa-angles-right"></i></p>
                        <h3 className='text-semibold hover:text-regal-orange ease-in-out duration-500'>SEE DETAILS</h3>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default UpcommingEvents;