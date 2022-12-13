import { Tabs } from 'flowbite-react';
import React from 'react';
import './BlogPage.css';
import { Link, useLoaderData } from 'react-router-dom';
import ScrollToTop from '../../../hooks/Scrool-to-top';

const BloogDetails = () => {
    const blogData = useLoaderData()
    console.log(blogData)
    const {title, image, role, category, description, desc2, desc3, coute } = blogData

    return (
        <div className='xl:px-52 px-5'>
            <ScrollToTop/>
            <div>
                <div className='flex flex-col xl:flex-row items-start gap-11 relative lg:pt-11'>
                    <div className='flex-1'>
                        <div className='relative flex flex-col items-center justify-center'>
                            <img
                                src={image}
                                alt=""
                                className='w-full h-64 md:h-96' />
                                <h3 className='w-32 h-12 font-semibold flex items-center justify-center bg-black text-white absolute top-0 right-0 lg:top-48 lg:-left-9'>25-12-22</h3>
                            <div className=' pt-7 '>
                                <div className='flex-1'>
                                    <div className='lg:pl-16'>
                                        <h3 className='text-xl font-bold '>{title.slice(0, 65)}...</h3>
                                        <div className='flex items-center text-sm gap-4 pt-2 pb-7'>
                                            <p className='border-r-2 pr-5 border-black'><i className=" pr-2 fa-solid fa-user text-regal-orange"></i>{role}</p>
                                            <p> <i className="pr-2  fa-solid fa-comments  text-regal-orange "></i>{category}</p>
                                        </div>
                                        <p className='text-base'>{description}</p>
                                    </div>
                                    <div className='px-11 py-7 blogDetails-bg my-7'>
                                        <i className="text-4xl fa-solid fa-quote-left"></i>
                                        <h3 className='px-9 font-semibold italic'>{coute}</h3>
                                        <div className='flex justify-end'>
                                            <i className="text-4xl fa-solid fa-quote-right text-end"></i>
                                        </div>
                                    </div>
                                    <div className='lg:pl-16 my-7'>
                                        <p className='text-base lg:pr-16'>{desc2}</p>

                                        <p className='pt-5 underlined text-semibold lg:pr-16'>{desc3}</p>

                                        <div className='flex justify-end border-t border-b border-gray-300 my-5 py-2'>
                                            <div className='flex items-center gap-5'>
                                                <h3 className=''>Share:</h3>
                                                <div className='flex items-center gap-3'>
                                                    <i class="fa-brands fa-facebook-f"></i>
                                                    <i class="fa-brands fa-twitter"></i>
                                                    <i class="fa-regular fa-paper-plane"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-7 mb-7 lg:pl-16'>
                                        <Tabs.Group
                                            aria-label="Tabs with underline"
                                            style="underline"
                                        >
                                            <Tabs.Item
                                                className='text-xl font-semibold'
                                                active={true}
                                                title="Comments">
                                                <div className='mt-5'>
                                                    {
                                                        [1, 2].map(i =>
                                                            <div className='flex items-start gap-9 border-b-2 border-gray-300 pb-5 mb-5'>
                                                                <img
                                                                    className='h-16 w-16 rounded-full'
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" alt="" />
                                                                <div>
                                                                    <h3 className='textxl text-regal-orange fontsemibold pb-2'>Hanna Gover</h3>
                                                                    <p>used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
                                                                    <div className='flex items-center gap-2 pt-2'>
                                                                        <p className='font-semibold underlined'>Reply</p>
                                                                        <p className='text-gray-400'>few hours ago</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </Tabs.Item>
                                            <Tabs.Item
                                                className='text-xl font-semibold'
                                                title="Write a Comment"
                                            >
                                                <div>
                                                    <form action="" method="post">
                                                        <div className='flex items-center gap-5 mb-3'>
                                                            <div className="w-full">
                                                                <label className="label">
                                                                    <span className="label-text">Full Name</span>
                                                                </label>
                                                                <input type="text" className="border-2 border-gray-300 w-full rounded" />
                                                            </div>
                                                            <div className="w-full">
                                                                <label className="label">
                                                                    <span className="label-text">Email ID</span>
                                                                </label>
                                                                <input type="text" className="border-2 border-gray-300 w-full rounded" />
                                                            </div>
                                                        </div>
                                                        <div className="w-full mb-5">
                                                            <label className="label">
                                                                <span className="label-text"> Your Comment</span>
                                                            </label>
                                                            <textarea type="text" className="border-2 border-gray-300 w-full h-40 rounded " />
                                                        </div>
                                                        <button className='border-2 border-regal-orange w-full lg:w-44 flex items-center justify-center bg-regal-orange hover:bg-blue-600 rounded h-11 text-white'>Submit Comment</button>
                                                    </form>
                                                </div>
                                            </Tabs.Item>
                                        </Tabs.Group>
                                    </div>
                                    {/* <div className='pt-7'>
                                        <h3 className='text-xl font-bold pb-5'>EVENT CONTENT</h3>
                                        <div>
                                            {
                                                [1, 2, 3, 4, 5].map((data, i) =>
                                                    <div key={i} className='flex  gap-4 items-start pb-3'>
                                                        <i className=" fa-solid fa-circle text-regal-orange text-xs mt-1.5"></i>
                                                        <h2 className='text-base '>
                                                        </h2>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div> */}

                                </div>
                                {/* <div className='w-56 mt-5 lg:mt-0'>
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-96'>
                        <div className="w-full flex gap-1 items-center flex-col lg:flex-row">
                            <input type="text" className="border-2 border-gray-300 w-full" />
                            <button className='bg-regal-orange text-white w-full lg:w-32  h-11 uppercase'>Search</button>
                        </div>
                        <div className='mt-7'>
                            <h3 className='text-2xl font-semibold pb-5'> Blog Category</h3>
                            <div>
                                {
                                    [1, 2, 3, 4, 5].map(i =>
                                        <div className='flex items-center justify-between border-b-2 border-gray-300 py-2'>
                                            <h3 className='text-lg font-semibold'>visual form documen</h3>
                                            <i class="fa-solid fa-caret-right"></i>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='mt-11'>
                            <h3 className='text-2xl font-semibold pb-4'>Recent Blog</h3>
                            <div>
                                {
                                    [1, 2, 3].map(i =>
                                        <div className='flex items-start gap-3 border-b-2 border-gray-300 pb-2 mt-7'>
                                            <img
                                                className='lg:h-28 lg:w-32 w-full rounded'
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" alt="" />
                                            <div>
                                                <h3 className='font-semibold text-regal-orange'>Heading</h3>
                                                <p className='text-gray-400 pt-2'>Lorem ipsum may be used as a placeholder before final copy is available</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='mt-12 '>
                            <h3 className='text-2xl font-semibold pb-4'>Tags</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {
                                    [1, 2, 3, 4, 5, 6].map(i =>
                                        <div className="w-full h-9 flex items-center border-2 border-gray-300 justify-center">
                                            Education
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BloogDetails;