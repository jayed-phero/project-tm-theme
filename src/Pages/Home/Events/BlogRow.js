import React from 'react';
import { Link } from 'react-router-dom';

const BlogRow = ({ blog }) => {
    return (
        <div>
            <div className='border-b-2 border-gray-100 pb-5 relative'>
                <div className=''>
                    <img className='h-48 w-full' src={blog.image} alt="" />
                    <div className='p-5 bg-white shadow-xl'>
                        <div className=''>
                            <p className='text-sm pb-2'>13th March 2022</p>
                            <h3 className='text-xl font-bold pb-3'>{blog.title.slice(0, 55)}...</h3>
                            <h3 className='text-gray-400'>{blog.description.slice(0, 181)}...</h3>
                            <div className='flex items-center text-sm gap-4 pt-3'>
                                <p ><i className=" pr-2 fa-solid fa-user text-regal-orange"></i>{blog.role}</p>
                                <p> <i className="pr-2  fa-solid fa-comments  text-regal-orange "></i>Comments</p>
                            </div>
                        </div>
                        <Link to={`/blogdetails/${blog._id}`}><button className='px-5 py-2 border-2 border-regal-orange rounded-3xl mt-5 hover:bg-regal-orange font-semibold hover:text-white text-regal-orange'>Read More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogRow;