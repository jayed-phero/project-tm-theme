import { Tabs } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import './BlogPage.css';
import { Link, useLoaderData } from 'react-router-dom';
import ScrollToTop from '../../../hooks/Scrool-to-top';
import { AuthContext } from '../../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const BloogDetails = () => {
    const { user } = useContext(AuthContext)
    const currTime = new Date().toLocaleTimeString();
    console.log(currTime)
    // const currDate = new Date().toLocaleDateString();
    // console.log(currDate)
    const current = new Date();
    const currDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const [comments, setComments] = useState([])
    const { handleSubmit, register } = useForm()
    const blogData = useLoaderData()
    console.log(blogData)
    const { title, image, role, category, description, desc2, desc3, coute, _id } = blogData

    const onSubmit = e => {
        console.log(e)
        const commentData = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
            date: currDate,
            commentID: _id,
            message: e.message,
        }
        console.log(commentData)
        axios.post(`${process.env.REACT_APP_API_URL}/comment`, commentData)
            .then(res => {
                console.log(res.data)
                toast.success("Thank You for Commenting")
                getComments()
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getComments()
    }, [])

    const getComments = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/commentsbyid?commentID=${_id}`)
            .then(data => {
                console.log(data)
                setComments(data.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='xl:px-52 px-5 md:px-20 lg:px-32 py-9'>
            <ScrollToTop />
            <div>
                <div className='flex flex-col xl:flex-row items-start gap-11 relative lg:pt-11'>
                    <div className='flex-1'>
                        <div className='relative flex flex-col items-center justify-center'>
                            <img
                                src={image}
                                alt=""
                                className='w-full h-52 md:h-96' />
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
                                    <div className='lg:px-11 px-5 py-7 blogDetails-bg my-7'>
                                        <i className="text-4xl fa-solid fa-quote-left"></i>
                                        <h3 className='px-5 lg:px-9 font-semibold italic'>{coute}</h3>
                                        <div className='flex justify-end'>
                                            <i className="text-4xl fa-solid fa-quote-right text-end"></i>
                                        </div>
                                    </div>
                                    <div className='lg:pl-16 my-7'>
                                        <p className='text-base lg:pr-16'>{desc2}</p>

                                        <p className='pt-5 underlined text-semibold lg:pr-16'>{desc3}</p>
                                    </div>
                                    <div className='flex my-9 py-2'>
                                        <div className='flex items-center justify-between gap-11'>
                                            <h3 className=''><i class="fa-solid fa-share-nodes text-xl text-regal-orange pr-2"></i> Share This Blog:</h3>
                                            <div className='flex items-center gap-3'>
                                                <div className="px-9 py-2 rounded bg-gray-100 hover:text-regal-orange ">
                                                    <i class="fa-brands fa-facebook-f "></i>
                                                </div>
                                                <div className="px-9 py-2 rounded bg-gray-100 hover:text-regal-orange ">
                                                    <i class="fa-brands fa-twitter "></i>
                                                </div>
                                                <div className="px-9 py-2 rounded bg-gray-100 hover:text-regal-orange ">
                                                    <i class="fa-regular fa-paper-plane "></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-7 mb-3 lg:mb-7 lg:pl-16'>
                                        {/* <Tabs.Group
                                            aria-label="Tabs with underline"
                                            style="underline"
                                        >
                                            <Tabs.Item
                                                className='text-xl font-semibold'
                                                active={true}
                                                title="Comments">
                                                <div className='mt-5'>
                                                    {
                                                        comments.length === 0 ?

                                                            <div>
                                                                <h3 className='px-5 py-5 lg:py-11 text-center font-semibold'>There are no Comment Releted to {category} based-post.</h3>
                                                            </div>
                                                            :
                                                            comments?.map(comment =>
                                                                <div className='flex items-start gap-9 border-b-2 border-gray-300 pb-5 mb-5'>
                                                                    <img
                                                                        className='h-16 w-16 rounded-full'
                                                                        src={comment.image} alt="" />
                                                                    <div>
                                                                        <h3 className='textxl text-regal-orange fontsemibold pb-2'>{comment.name}</h3>
                                                                        <p>{comment.message}</p>
                                                                        <div className='flex items-center gap-2 pt-2'>
                                                                            <p className='font-semibold underlined'>Reply</p>
                                                                            <p className='text-gray-400'>{comment.date}</p>
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
                                                    {
                                                        user?.uid ?
                                                            <form onSubmit={handleSubmit(onSubmit)} >
                                                                <div className='flex items-center gap-5 mb-3'>
                                                                    <div className="w-full">
                                                                        <label className="label">
                                                                            <span className="label-text">Full Name</span>
                                                                        </label>
                                                                        <input type="text" className="border-2 border-gray-300 w-full rounded"
                                                                            {...register("name")}
                                                                            defaultValue={user?.displayName}
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                    <div className="w-full">
                                                                        <label className="label">
                                                                            <span className="label-text">Email ID</span>
                                                                        </label>
                                                                        <input type="text" className="border-2 border-gray-300 w-full rounded"
                                                                            {...register("email")}
                                                                            defaultValue={user?.email}
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="w-full mb-5">
                                                                    <label className="label">
                                                                        <span className="label-text"> Your Comment</span>
                                                                    </label>
                                                                    <textarea type="text" className="border-2 border-gray-300 w-full h-40 rounded "
                                                                        required
                                                                        {...register("message")}
                                                                    />
                                                                </div>
                                                                <button type='submit' className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 w-full text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Submit Comment</button>
                                                            </form>
                                                            :
                                                            <div>
                                                                <h3 className='px-5 py-5 lg:py-11 text-xl font-semibold text-center'>Please be a Registered person of TMKMT, for comment.</h3>
                                                            </div>
                                                    }
                                                </div>
                                            </Tabs.Item>
                                        </Tabs.Group> */}
                                        <h3 className="text-xl font-bold m">Comment</h3>
                                        <div>
                                            <div className='mt-5'>
                                                {
                                                    comments.length === 0 ?

                                                        <div>
                                                            <h3 className='border-2 border-gray-300 p-7 lg:my-11 text-center font-semibold rounded-xl'>There are no Comment Releted to {category} based-post.</h3>
                                                        </div>
                                                        :
                                                        comments?.map(comment =>
                                                            <div className='flex items-start gap-9 pb-5 mb-7'>
                                                                <img
                                                                    className='h-20 w-20 rounded-full'
                                                                    src={comment.image} alt="" />
                                                                <div>
                                                                    <h3 className='text-xl text-regal-orange fontsemibold pb-1'>{comment.name}</h3>
                                                                    <p className='text-sm text-gray-500'>Student of tmkmt</p>
                                                                    <p className='text-gray-400 text-sm pt-3'>{comment.message}</p>
                                                                    <div className='flex items-center gap-2 pt-2'>
                                                                        <p className='font-semibold underlined text-sm'>Reply</p>
                                                                        <p className='text-gray-400 text-sm'>{comment.date}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                }
                                            </div>
                                            {/* div */}
                                            <div>
                                                {
                                                    user?.uid ?
                                                        <form onSubmit={handleSubmit(onSubmit)} >
                                                            <div className='flex items-center gap-5 mb-3'>
                                                                <div className="w-full">
                                                                    <label className="label">
                                                                        <span className="label-text">Full Name</span>
                                                                    </label>
                                                                    <input type="text" className="border-2 border-gray-300 w-full rounded"
                                                                        {...register("name")}
                                                                        defaultValue={user?.displayName}
                                                                        disabled
                                                                    />
                                                                </div>
                                                                <div className="w-full">
                                                                    <label className="label">
                                                                        <span className="label-text">Email ID</span>
                                                                    </label>
                                                                    <input type="text" className="border-2 border-gray-300 w-full rounded"
                                                                        {...register("email")}
                                                                        defaultValue={user?.email}
                                                                        disabled
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="w-full mb-5">
                                                                <label className="label">
                                                                    <span className="label-text"> Your Comment</span>
                                                                </label>
                                                                <textarea type="text" className="border-2 border-gray-300 w-full h-40 rounded "
                                                                    required
                                                                    {...register("message")}
                                                                />
                                                            </div>
                                                            <button type='submit' className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 w-full text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Submit Comment</button>
                                                        </form>
                                                        :
                                                        <div>
                                                            <h3 className='p-7 border-2 border-gray-300 rounded-xl lg:py-11 text-xl font-semibold text-center'>Please be a Registered person of TMKMT, for comment.</h3>
                                                        </div>
                                                }
                                            </div>
                                        </div>
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
                    <div className='w-full lg:w-96 -mt-5 lg:-mt-0'>
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
                                        <div className='flex items-start lg:flex-row flex-col
                                         gap-3 border-b-2 border-gray-300 pb-2 mt-7'>
                                            <img
                                                className='lg:h-28 lg:w-32 w-full rounded'
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" alt="" />
                                            <div>
                                                <h3 className='font-semibold text-regal-orange text-xl'>placeholder before final copy is available...</h3>
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