import { useQuery } from '@tanstack/react-query';
import React from 'react';
import GreenBlog from './GreenBlog';

const GreenBlogContainer = () => {
    const { data: blogsData = [], isLoading } = useQuery({
        queryKey: ['displayblog'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/displayblog`)
            .then(res => res.json())
    })
    return (
        <div className='max-w-screen-xl mx-auto px-6 py-11 mx-auto'>
            <div className="blog grid grid-cols-1 md:gird-cols-2 xl:grid-cols-3 gap-7">
                {
                    blogsData.map((blog) => 
                       <GreenBlog blog={blog}/>
                    )
                }
            </div>
        </div>
    );
};

export default GreenBlogContainer;