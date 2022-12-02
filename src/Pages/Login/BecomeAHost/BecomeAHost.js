import React from 'react';
import { Link } from 'react-router-dom';

const BecomeAHost = () => {
    return (
        <div className='flex justify-center items-center py-8'>
            <div className='flex flex-col w-full sm:w-[25rem] p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Become Host</h1>
                    <p className='text-sm text-gray-400'>Create a new Host account</p>
                </div>
                <form
                    noValidate=''
                    action=''
                    className='space-y-12 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                required
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                Select Image:
                            </label>
                            <input
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                required
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Designation
                            </label>
                            <select className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900 max-w-xs">
                                <option>Administrative</option>
                                <option>Teachers</option>
                                <option>Users</option>
                            </select>
                        </div>
                        <div>
                            <div className='flex justify-between mb-2'>
                                <label htmlFor='password' className='text-sm'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900'
                            />
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <div>
                            <button
                                type='submit'
                                className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </form>
                <p className='px-6 py-3 text-sm text-center text-gray-400'>
                    Already have an account yet?{' '}
                    <Link to='/login' className='hover:underline text-gray-600'>
                        Sign In
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default BecomeAHost;