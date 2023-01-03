import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthTokenForStudentInSignIn } from '../../../api/auth';
import { getUserRole } from '../../../api/userRole';
import { AuthContext } from '../../../Context/AuthProvider';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';

const HostLogin = () => {
    const { user, signInUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const [authError, setAuthError] = useState(' ')
    const [userRole, setUserRole] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        // getUserRole(user)
        //     .then(data => {
        //         console.log(data)
        //         setUserRole(data)
        //     })
        axios.get(`${process.env.REACT_APP_API_URL}/hostrolesdata/${user?.email}`)
            .then(res => {
                console.log(res)
                setUserRole(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const onSubmit = event => {
        setLoading(true)
        signInUser(event.email, event.password)
            .then(result => {
                const user = result.user;
                const hostSignInData = {
                    email: event.email,
                    password: event.password,
                    hostId: event.hostId
                }
                console.log(user)
                // setAuthTokenForStudentInSignIn(hostSignInData)
                axios.put(`${process.env.REACT_APP_API_URL}/hostlogin`, hostSignInData)
                    .then(res => {
                        console.log(res)
                        if (res.data.status === "success") {
                            toast.success("Employee SignIn successfully")
                            const accessToken = res?.data?.token
                            localStorage.setItem("accessToken", accessToken);
                            // navigate(from, { replace: true })
                            navigate('/dashboard')
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

            })
            .catch(err => {
                console.log(err)
                setAuthError(err.message)
                setLoading(false)
            })
    }
    return (
        <div className='px-6'>
            {
                userRole && userRole === 'requested' ?
                    (
                        <div className='h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl'>
                            Request Sent, wait for admin approval
                        </div>
                    )
                    :
                    (
                        <div className='flex justify-center items-center py-5 md:py-16'>
                            <div className='flex flex-col w-full max-w-md rounded-md sm:p-20 bg-gray-100 text-gray-900'>
                                <div className='mb-8 text-center'>
                                    <h1 className='my-3 text-4xl font-bold'>Employee Login</h1>
                                    <p className='text-sm text-gray-400'>
                                        Sign in to access your account
                                    </p>
                                    <p className='text-red-500 text-semibold py-2'>{authError}</p>
                                </div>
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    noValidate=''
                                    action=''
                                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                                >
                                    <div className='space-y-4'>
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
                                        <div>
                                            <label htmlFor='email' className='block mb-2 text-sm'>
                                                Email address
                                            </label>
                                            <input
                                                type='email'
                                                name='email'
                                                id='email'
                                                required
                                                placeholder='Enter Your Email Here'
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                                data-temp-mail-org='0'
                                                {...register("email")}
                                            />
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
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                                {...register("password")}
                                            />
                                        </div>

                                        <div className='space-y-1'>
                                            <button className='text-xs hover:underline text-gray-400'>
                                                Forgot password?
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type='submit'
                                            className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 w-full text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                        >
                                            {loading ? <SmallSpinner /> : "Sign In"}
                                        </button>
                                    </div>
                                </form>

                                <p className='px-6 text-sm text-center text-gray-400 pt-3'>
                                    Don't have an account yet?{' '}
                                    <Link to='/employeesearch' className='hover:underline text-gray-600'>
                                        Sign up
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    )
            }


        </div>
    );
};

export default HostLogin;