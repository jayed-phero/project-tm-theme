import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthTokenForStudentInSignIn } from '../../../api/auth';
import { getUserRole } from '../../../api/userRole';
import { AuthContext } from '../../../Context/AuthProvider';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';

const SearchHost = () => {
    const { user, signInUser, loading, setLoading } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const [authError, setAuthError] = useState(' ')
    const [userRole, setUserRole] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

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
                setAuthTokenForStudentInSignIn(user)
                toast.success("Employee SignIn successfully")
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err)
                setAuthError(err.message)
                setLoading(false)
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
                        <div className='flex justify-center items-center py-5'>
                            <div className='flex flex-col w-full rounded-md sm:p-20  bg-gray-100 text-gray-900'>
                                <div className='mb-8 text-center'>
                                    <h1 className='my-3 text-4xl font-bold'>Search Identity</h1>
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
                                                placeholder='Enter Your Email Here'
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                                data-temp-mail-org='0'
                                                {...register("employeeid")}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor='email' className='block mb-2 text-sm'>
                                                Designation
                                            </label>
                                            <select className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                                                {...register("designation")}
                                            >
                                                <option>Select</option>
                                                <option value='administrative'>Administrative</option>
                                                <option value='teacher'>Teachers</option>
                                                <option value='user'>Users</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type='submit'
                                            className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 w-1/2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                        >
                                            {loading ? <SmallSpinner /> : "Search"}
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

export default SearchHost;