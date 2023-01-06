import React, { useEffect, useState } from 'react';
import BlogRow from './BlogRow';
import ScrollToTop from '../../../hooks/Scrool-to-top';
import BlogSkeleton from '../../Shared/Skeleton/BlogSkeleton';
import { useQuery } from '@tanstack/react-query';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    const { data: blogsData = [], isLoading } = useQuery({
        queryKey: ['displayblog'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/displayblog`)
            .then(res => res.json())
    })

    return (
        <div data-aos="fade-up" id='blogs' className='max-w-screen-xl mx-auto px-5 py-11 lg:py-16 '>
            <ScrollToTop />
            {/* <div class="container px-6 py-5 mx-auto"> */}
            <div class="">
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
                    isLoading ?
                        [1, 2, 3].map((b, i) =>
                            <BlogSkeleton key={i} />
                        )
                        :
                        blogsData?.map(blog => <BlogRow key={blog._id} blog={blog}></BlogRow>)
                }
            </div>
        </div>
    );
};

export default Blogs;