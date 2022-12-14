import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { postAndGetImageUrl } from '../../../api/GetImageUrl';
import { getTMTCode } from '../../../api/getTMTcode';
import { authTkenAndSaveHostData } from '../../../api/hostinfoSave';
import { getUserRole } from '../../../api/userRole';
import { AuthContext } from '../../../Context/AuthProvider';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';

const BecomeAHost = ({ searchData }) => {
    const { user, createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const [userRole, setUserRole] = useState(null)
    const [authError, setAuthError] = useState(' ')
    const [loading, setLoading] = useState(false)


    // useEffect(() => {
    //     // getUserRole(user)
    //     //     .then(data => {
    //     //         console.log(data)
    //     //         setUserRole(data)
    //     //     })
    //     axios.get(`${process.env.REACT_APP_API_URL}/hostrolesdata/${user?.email}`)
    //     .then(res => {
    //         console.log(res)
    //         setUserRole(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])

    const onSubmit = event => {
        console.log(event)
        const name = event.name
        const email = event.email
        const password = event.password
        const image = event.image[0]
        const hostId = event.hostId

        setLoading(true)
        postAndGetImageUrl(image)
            .then(imgLink => {
                console.log(imgLink)
                createUser(email, password)
                    .then(result => {
                        const user = result.user
                        console.log(user)
                        updateUserProfile(name, imgLink)
                        const hostData = {
                            email: email,
                            name: name,
                            image: imgLink,
                            hostId: hostId,
                            password: password
                        }
                        authTkenAndSaveHostData(hostData)
                        .then(data => {
                            console.log(data)
                            setLoading(false)
                        })
                    })
                    .catch(err => {
                        console.log(err)
                        setAuthError(err.message)
                        setLoading(false)
                    })
            })
    }
    return (
        <div className='px-6'>
            {
                // userRole && userRole.role === 'searched' ?
                user?.uid ?
                    (
                        <div className='h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl text-green-500 font-semibold'>
                          ***  Request Sent, wait for admin approval ***
                        </div>
                    )
                    :
                    (
                        <div className='flex justify-center items-center py-7 md:py-16'>
                            <div className='flex flex-col w-full max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                                <div className='mb-8 text-center'>
                                    <h1 className='my-3 text-4xl font-bold'>Employee Signup</h1>
                                    <p className='text-sm text-gray-400'>Create a new Employee Account</p>
                                    <p className='text-red-500 text-semibold'>{authError}</p>
                                </div>
                                <form
                                    noValidate=''
                                    action=''
                                    className='space-y-12 ng-untouched ng-pristine ng-valid'
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div className='space-y-4'>
                                        {/* <div>
                                            <label htmlFor='email' className='block mb-2 text-sm'>
                                                TMT Employee Code
                                            </label>
                                            <input
                                                type='text'
                                                name='name'
                                                id='name'
                                                placeholder='Enter Your Name Here'
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                                data-temp-mail-org='0'
                                                {...register("name")}
                                                onBlur={onBlur}
                                            />
                                        </div> */}
                                        <div className='flex items-center gap-5'>
                                            <div className='w-full'>
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
                                                        className='w-full px-3 py-2 mb-3 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                                        data-temp-mail-org='0'
                                                        {...register("name")}
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor='email' className='block mb-2 text-sm'>
                                                        Employee ID
                                                    </label>
                                                    <input
                                                        type='text'
                                                        name='email'
                                                        id='email'
                                                        required
                                                        placeholder='Type Employee ID'
                                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                                        data-temp-mail-org='0'
                                                        {...register("hostId")}
                                                    />
                                                </div>
                                            </div>
                                            <div className="px-16 py-16 rounded border border-regal-orange"></div>
                                        </div>

                                        {/* <div>
                                            <label htmlFor='email' className='block mb-2 text-sm'>
                                                Designation
                                            </label>
                                            <select className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900 max-w-xs"
                                                {...register("designation")}
                                            >
                                                <option>Select</option>
                                                <option value='administrative'>Administrative</option>
                                                <option value='teacher'>Teachers</option>
                                                <option value='user'>Users</option>
                                            </select>
                                        </div> */}

                                        <div className='flex flex-col'>
                                            <label htmlFor='image' className='mb-5 text-sm'>
                                                Select Image:
                                            </label>
                                            <label className='cursor-pointer'>
                                                {/* <i class="fa-solid fa-image pr-3"></i>
                                                choose file */}
                                                <input
                                                    type='file'
                                                    id='image'
                                                    name='image'
                                                    accept='image/*'
                                                    required
                                                    {...register("image")}
                                                />
                                            </label>
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
                                                {...register("email")}
                                            />
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
                                                {...register("password")}
                                            />
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <div>
                                            <button
                                                type='submit'
                                                className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 w-full text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                            >
                                                {loading ? <SmallSpinner /> : "Sign Up"}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <p className='px-6 py-3 text-sm text-center text-gray-400'>
                                    Already have an account yet?{' '}
                                    <Link to='/tmtsection' className='hover:underline text-gray-600'>
                                        Sign In
                                    </Link>
                                </p>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default BecomeAHost;