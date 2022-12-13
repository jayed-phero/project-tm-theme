import React, { useEffect, useState } from 'react';
import axios from "axios"
import BlogRow from './BlogRow';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        getBlog()
    }, [])



    const getBlog = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/displayblog`)
            .then(res => {
                console.log(res)
                setBlogs(res.data)
            })
    }
    return (
        <div className='xl:px-52 md:px-20 md:py-20 px-5'>
            <div class="container px-6 py-5 mx-auto">
                <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Blogs & <span className='text-regal-orange'>News</span></h1>
                <p class="max-w-2xl mx-auto mt-3 text-center text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>
                <div className='flex justify-center mx-auto items-center gap-3 py-5'>
                    <p className='h-1 w-16 bg-black'></p>
                    <i className="fa-solid fa-graduation-cap text-black"></i>
                    <p className='h-1 w-16 bg-black'></p>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7'>
                {
                    blogs?.map(blog => <BlogRow key={blog._id} blog={blog}></BlogRow>)
                }
            </div>
        </div>
    );
};

export default Blogs;