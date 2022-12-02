import React from 'react';
import { Link } from 'react-router-dom';

const StudentLogin = () => {
    return (
        <div className='xl:px-52 py-9'>
            {/* <div class="container px-6 py-5 mx-auto">
                <h1 class="text-3xl font-semibold text-center text-regal-orange capitalize lg:text-4xl dark:text-white">Student</h1>
                <p className='text-center py-2 text-2xl font-semibold'>Student List Here</p>
                <div className='flex justify-center mx-auto items-center gap-3 py-5'>
                    <p className='h-1 w-16 bg-black'></p>
                    <i className="fa-solid fa-graduation-cap text-black"></i>
                    <p className='h-1 w-16 bg-black'></p>
                </div>
            </div> */}
            <div className='flex items-start gap-7'>
                <div className='flex flex-col sm:px-10  rounded-md p-5 bg-gray-100 text-gray-900 md:w-[25rem] w-full'>
                    <div className='text-center'>
                        <h1 className='my-3 text-2xl font-bold'>Student Login</h1>
                    </div>
                    <form
                        noValidate=''
                        action=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='studentid' className='block mb-2 text-sm'>
                                    Student ID
                                </label>
                                <input
                                    type='text'
                                    name='studentid'
                                    id='email'
                                    required
                                    placeholder='Enter Your ID'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900 max-w-xs'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='studentid' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    required
                                    placeholder='Enter Your Name'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900 max-w-xs'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Class Name
                                </label>
                                <select className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900 max-w-xs">
                                    <option>One to Ten</option>
                                    <option>Alim to Kamil</option>
                                    <option>Honours</option>
                                </select>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900 max-w-xs'
                                />
                            </div>
                            <div className='-mt-2 flex justify-end'>
                                <button className='text-xs hover:underline  text-blue-400'>
                                    Forgot password?
                                </button>
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100 max-w-xs'
                            >
                                Student Login
                            </button>
                        </div>
                    </form>
                </div>
                <div className='flex-1'>
                    <div class="container px-6 mx-auto">
                        <div class="grid gap-8 lg:grid-cols-2 ">
                            <div class="w-full max-w-xs text-center">
                                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />

                                <div class="mt-2">
                                    <h3 class="text-lg font-semibold text-regal-orange dark:text-gray-200">Ahmed Omer</h3>
                                    <h3 className='mt-1 text-black'>
                                        <span class="font-semibold dark:text-gray-300 ">ID:</span> 0011
                                    </h3>
                                    <h3 className='mt-1 text-black'>
                                        <span class="font-semibold dark:text-gray-300 ">Class:</span> One
                                    </h3>
                                </div>
                            </div>

                            <div class="w-full max-w-xs text-center">
                                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" />

                                <div class="mt-2">
                                    <h3 class="text-lg font-semibold text-regal-orange dark:text-gray-200">John Doe</h3>
                                    <h3 className='mt-1 text-black'>
                                        <span class="font-semibold dark:text-gray-300 ">ID:</span> 0011
                                    </h3>
                                    <h3 className='mt-1 text-black'>
                                        <span class="font-semibold dark:text-gray-300 ">Class:</span> One
                                    </h3>
                                </div>
                            </div>

                            <div class="w-full max-w-xs text-center">
                                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" />

                                <div class="mt-2">
                                    <h3 class="text-lg font-semibold text-regal-orange dark:text-gray-200">Steve Ben</h3>
                                    <h3 className='mt-1 text-black'>
                                        <span class="font-semibold dark:text-gray-300 ">ID:</span> 0011
                                    </h3>
                                    <h3 className='mt-1 text-black'>
                                        <span class="font-semibold dark:text-gray-300 ">Class:</span> One
                                    </h3>
                                </div>
                            </div>

                            <div class="w-full max-w-xs text-center">
                                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />

                                <div class="mt-2">
                                    <h3 class="text-lg font-semibold text-regal-orange dark:text-gray-200">Patterson Jhonson</h3>
                                    <h3 className='mt-1 text-black'>
                                        <span class="font-semibold dark:text-gray-300 ">ID:</span> 0011
                                    </h3>
                                    <h3 className='mt-1 text-black'>
                                        <span class="font-semibold dark:text-gray-300 ">Class:</span> One
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentLogin;