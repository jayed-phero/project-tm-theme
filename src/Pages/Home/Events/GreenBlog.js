import { useQuery } from '@tanstack/react-query';
import React from 'react';
import './BlogPage.css'

const GreenBlog = ({blog}) => {
    return (
        <div className='items shadow'>
            <div className='img'>
                <img src={blog.image} alt='' />
            </div>
            <div className='text'>
                <div className='admin flex items-center justify-between '>
                    <span>
                        <i className='fa fa-user'></i>
                        <label htmlFor=''>ADMIN</label>
                    </span>
                    <span>
                        <i className='fa fa-calendar-alt'></i>
                        <label htmlFor=''>JAN. 17, 2021</label>
                    </span>
                    <span>
                        <i className='fa fa-comments'></i>
                        <label htmlFor=''>7 COMMENTS</label>
                    </span>
                </div>
                <h1>{blog.title.slice(0, 56)}</h1>
                <p>{blog.description.slice(0, 151)}</p>
            </div>
        </div>
    );
};

export default GreenBlog;