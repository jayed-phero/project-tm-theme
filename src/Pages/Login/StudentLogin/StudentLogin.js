import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthTokenForStudentInSignIn, setAuthTokenForStudentInSignInIn } from '../../../api/auth';
import { AuthContext } from '../../../Context/AuthProvider';
import ScrollToTop from '../../../hooks/Scrool-to-top';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';

const StudentLogin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, signInUser, loading, setLoading } = useContext(AuthContext)
    const [authError, setAuthError] = useState(' ')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const onSubmit = (event) => {
        console.log(event)
        const studentId = event.studentId
        const email = event.email
        const password = event.password

        // const studentInfo = {
        //     studentId,
        //     email,
        //     password
        // }

        signInUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('Login Successful.....!')
                // setAuthTokenForStudentInSignInIn(result.user)
                const studentSignInData = {
                    email,
                    password ,
                    studentId
                }
                axios.post(`${process.env.REACT_APP_API_URL}/studentlogin`, studentSignInData)
                    .then(res => {
                        console.log(res)
                        if (res.data.status === "success") {
                            toast.success("Student SignIn successfully")
                            const accessToken = res?.data?.token
                            localStorage.setItem("accessToken", accessToken);
                            // navigate(from, { replace: true })
                            navigate('/studentprofile')
                            setLoading(false)
                        } else {
                            toast.error(res.data.message)
                            setLoading(false)
                        }

                    })
                    .catch(err => {
                        console.log(err)
                        setLoading(false)
                    })

                navigate(from, { replace: true })
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err)
                setAuthError(err.message)
                setLoading(false)
            })

        // axios.post(`${process.env.REACT_APP_API_URL}/studentlogin`, studentInfo)
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }


    return (
        <div className='xl:px-52 py-9 px-6 md:px-20 lg:px-32'>
            <ScrollToTop />
            <div className='flex items-start gap-7 flex-col md:flex-row '>
                <div className='flex flex-col sm:px-10 rounded-md p-5 bg-gray-100 text-gray-900 md:w-[25rem] w-full'>
                    <div className='text-center'>
                        <h1 className='my-3 text-2xl font-bold'>Student Login</h1>
                        <p className='text-red-500 text-seimibold'>{authError}</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}
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
                                    placeholder='Enter Your ID'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900 max-w-xs'
                                    data-temp-mail-org='0'
                                    {...register("studentId")}
                                />
                            </div>
                            <div>
                                <label htmlFor='studentid' className='block mb-2 text-sm'>
                                    Email
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    required
                                    placeholder='Enter Your Email'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900 max-w-xs'
                                    data-temp-mail-org='0'
                                    {...register("email", { required: "Email is required." })}
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Class Name
                                </label>
                                <select className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900 max-w-xs"
                                // {...register("class", { required: "Class is required." })}
                                >
                                    <option>Select Class</option>
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
                                    {...register("password", { required: "Password is required." })}
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
                                className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 w-full text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                            >
                                {
                                    loading ? <SmallSpinner /> : 'Student Login'
                                }
                            </button>
                        </div>
                    </form>
                </div>
                <div className='flex-1 w-full'>
                    <div class="container w-full">
                        <div class="grid gap-8 grid-cols-1 lg:grid-cols-2 w-full ">
                            <div class="w-full w-full text-center">
                                <img class="object-cover object-center w-full h-48 rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />

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

                            <div class="w-full text-center">
                                <img class="object-cover object-center w-full h-48 rounded-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" />

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

                            <div class="w-full text-center">
                                <img class="object-cover object-center w-full h-48  rounded-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" />

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

                            <div class="w-full text-center">
                                <img class="object-cover object-center w-full h-48 rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />

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