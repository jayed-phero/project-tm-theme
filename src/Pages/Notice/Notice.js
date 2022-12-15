import React from 'react'
import { Link } from 'react-router-dom';

const Notice = () => {
    return (
        <div className='px-5 md:px-20 lg:px-32 xl:px-52 py-16'>
            <h3 className='text-center pb-11 text-3xl md:text-4xl lg:text-6xl font-bold'>Notice Board</h3>
            <div className='flex items-start flex-col lg:flex-row'>
                <div>
                    {
                        [1, 2, 3, 4, 5].map(i =>
                            <div className='flex items-start gap-7 py-5'>
                                <div className=' p-2 bg-regal-orange '>
                                    <div className='px-2 py-2 border border-gray-400 flex flex-col items-center justify-center text-white'>
                                        <h3 className=' text-xl lg:text-2xl font bold'>05</h3>
                                        <p className='text-sm'>Sep.25</p>
                                    </div>
                                </div>
                                <div className='border-b pb-7 border-gray-300 flex items-center justify-between flex-col lg:flex-row'>
                                    <div className='flex-1'>
                                        <h3 className='text-xl lg:text-2xl font-semibold pb-5 hover:text-regal-orange ease-in duration-300'>Timetable Mid of Semester Examination July 2018</h3>
                                        <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                                    </div>
                                    <div className='w-44 flex lg:justify-end justify-start mt-5'>
                                        <Link to='/commingsoon' className='text-regal-orange border-2 border-regal-orange px-3 py-2 bg-transparent hover:bg-regal-orange hover:text-white text-semibold'>SEE DETAILS</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Notice;