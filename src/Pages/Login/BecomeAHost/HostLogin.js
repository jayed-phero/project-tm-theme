import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authTkenAndSaveHostData } from '../../../api/hostinfoSave';
import { getUserRole } from '../../../api/userRole';
import { AuthContext } from '../../../Context/AuthProvider';

const HostLogin = () => {
    const { user, signInUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()

    const [userRole, setUserRole] = useState('')

    useEffect(() => {
        getUserRole(user)
            .then(data => {
                console.log(data)
                setUserRole(data)
            })
    }, [])

    const onSubmit = event => {
        signInUser(event.email, event.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                authTkenAndSaveHostData(user)
                toast.success("Host Created successfully")
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            {
                userRole && userRole === 'requested' ?
                    (
                        <div className='h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl'>
                            Request Sent, wait for admin approval
                        </div>
                    )
                    :
                    (
                        <div className='flex justify-center items-center py-8'>
                            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                                <div className='mb-8 text-center'>
                                    <h1 className='my-3 text-4xl font-bold'>Employee Login</h1>
                                    <p className='text-sm text-gray-400'>
                                        Sign in to access your account
                                    </p>
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
                                            className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>

                                <p className='px-6 text-sm text-center text-gray-400 pt-3'>
                                    Don't have an account yet?{' '}
                                    <Link to='/employeesignup' className='hover:underline text-gray-600'>
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