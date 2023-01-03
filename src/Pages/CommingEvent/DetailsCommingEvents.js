import { getAllByTitle } from '@testing-library/react';
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import ScrollToTop from '../../hooks/Scrool-to-top';

const DetailsCommingEvents = () => {
    const { user } = useContext(AuthContext)

    const eventData = useLoaderData()
    console.log(eventData)
    const { image, title, description, start, to, content, address , price, _id} = eventData;

    const timing = [
        {
            text: "Days",
            count: "25"
        },
        {
            text: "Hours",
            count: "15"
        },
        {
            text: "Minutes",
            count: "55"
        },
        {
            text: "Seconds",
            count: "11"
        },
    ]


    return (
        <div className='xl:px-52 px-5 md:px-20 lg:px-32 py-7 md:py-16'>
            <ScrollToTop/>
            <div>
                <div className='flex flex-col xl:flex-row items-start gap-11 relative '>
                    <div className='flex-1'>
                        <div className='text-xl lg:text-2xl font-semibold pb-7'>
                            <h1>{title}</h1>
                        </div>
                        <div className='relative flex flex-col items-center justify-center'>
                            <img
                                src={image}
                                alt=""
                                className='w-full h-64 md:h-96' />
                            {/* <div className='absolute top-3 grid grid-cols-2 md:grid-cols-4 gap-6'>
                                {
                                    timing.map((time, i) =>
                                        <div key={i} className='h-24 w-24 rounded-full border-2 border-white text-white flex items-center justify-center flex-col bg-gray-300'>
                                            <h3 className='text-5xl font-bold'>{time.count}</h3>
                                            <p>{time.text}</p>
                                        </div>
                                    )
                                }
                            </div> */}
                            <div className="grid grid-flow-col hidden md:block gap-5 text-center auto-cols-max absolute top-5">
                                {/* <span className="countdown">
                                    <span style={{ "--value": 9 }}></span>
                                </span> */}
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 15 }}></span>
                                    </span>
                                    days
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 10 }}></span>
                                    </span>
                                    hours
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 24 }}></span>
                                    </span>
                                    min
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 39 }}></span>
                                    </span>
                                    sec
                                </div>
                            </div>
                            <div className='flex flex-col xl:flex-row items-start lg:gap-16 pt-12 '>
                                <div className='flex-1'>
                                    <div>
                                        <h3 className='text-xl font-bold pb-4'>EVENT DESCRIPTION</h3>
                                        <p className='text-base'>{description}</p>
                                    </div>
                                    <div className='pt-7'>
                                        <h3 className='text-xl font-bold pb-5'>EVENT CONTENT</h3>
                                        <div>
                                            {
                                                content.map((data, i) =>
                                                    <div key={i} className='flex  gap-4 items-start pb-3'>
                                                        <i className=" fa-solid fa-circle text-regal-orange text-xs mt-1.5"></i>
                                                        <h2 className='text-base '> {data.content}
                                                        </h2>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-5 py-7'>
                                        <h3 className='text-xl'>Share:</h3>
                                        <div className='flex items-center gap-5'>
                                            <div className='border-2 border-gray-300 rounded-full h-9 w-9 flex items-center justify-center'>
                                                <i class="fa-brands fa-facebook-f"></i>
                                            </div>
                                            <div className='border-2 border-gray-300 rounded-full h-9 w-9 flex items-center justify-center'>
                                                <i class="fa-brands fa-google"></i>
                                            </div>
                                            <div className='border-2 border-gray-300 rounded-full h-9 w-9 flex items-center justify-center'>
                                                <i class="fa-brands fa-twitter"></i>
                                            </div>
                                            <div className='border-2 border-gray-300 rounded-full h-9 w-9 flex items-center justify-center'>
                                                <i class="fa-regular fa-paper-plane"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-56 mt-5 lg:mt-0'>
                                    <div className='flex gap-3  border-b border-gray-300 py-3 '>
                                        <p className='text-regal-orange text-lg'>
                                            <i class="fa-regular fa-clock"></i>
                                        </p>
                                        <div>
                                            <h3 className='font-bold'>Start Time</h3>
                                            <div className='text-gray-500 text-base'>
                                                <p>09:00 AM</p>
                                                <p>{start}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-3  border-b border-gray-300 py-3 '>
                                        <p className='text-regal-orange text-lg'>
                                            <i class="fa-solid fa-flag"></i>
                                        </p>
                                        <div>
                                            <h3 className='font-bold'>Finish Time</h3>
                                            <div className='text-gray-500 text-base'>
                                                <p>5:00 PM</p>
                                                <p>{to}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-4  border-b border-gray-300 py-3 '>
                                        <p className='text-regal-orange text-lg'>
                                            <i class="fa-solid fa-location-dot"></i>
                                        </p>
                                        <div>
                                            <h3 className='font-bold'>Address</h3>
                                            <div className='text-gray-500 text-base'>
                                                <p>{address}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-72 sticky top-32 pb-16 border borde-gray-300 '>
                        <h3 className='uppercase font-bold text-xl w-full py-4 bg-regal-orange text-center text-white'>Registration</h3>

                        <div className='px-5 py-7'>
                            <div className='text-lg border-b border-gray-300 py-4 flex items-center justify-between text-gray-500'>
                                <h3>Total Fee</h3>
                                <p className='font-semibold '>{price}</p>
                            </div>
                            <div className='text-lg border-b border-gray-300 py-4 flex items-center justify-between text-gray-500'>
                                <h3>Booked Slots</h3>
                                <p className='font-semibold'>03</p>
                            </div>
                            <div className='text-lg border-b border-gray-300 py-4 flex items-center justify-between text-gray-500'>
                                <h3>Cost</h3>
                                <p className='font-semibold text-green-600'>Free</p>
                            </div>
                            <div className='text-lg border-b border-gray-300 py-4 flex items-center justify-between text-gray-500'>
                                <h3>Quantity</h3>
                                <p className='font-semibold border border-gray-300 px-5 py-1'>1</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-center flex-col'>
                            {
                                user ?
                                    <div className='flex-col flex items-center'>
                                        <Link to={`/eventpaymentinfo/${_id}`}>
                                            <h3 className='w-32 py-2 text-center text-white
                                            bg-regal-orange font-semibold mt-2 text-white'>BOOK NOW</h3>
                                        </Link>
                                    </div>
                                    :
                                    <div className='flex-col flex items-center justify-center'>
                                        <Link to='/studentlogin'>
                                            <h3 className='w-32 py-2 text-center bg-regal-orange font-semibold mt-2 text-white'>LOGIN NOW</h3>
                                        </Link>
                                        <p className='text-gray-500 pt-5 w-2/3 mx-auto text-center'>You must login to our site to book this event!</p>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCommingEvents;

// echo "# project-tm-pro" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/jayed-phero/project-tm-pro.git
// git push -u origin main