import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthTokenForStudentInSignIn } from '../../../api/auth';
import { getUserRole } from '../../../api/userRole';
import { AuthContext } from '../../../Context/AuthProvider';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';
import TeachersRegistrationTab from '../TeachersRegister/TeachersRegistrationTab';
import BecomeAHost from './BecomeAHost';

const SearchHost = () => {
    const { user, signInUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const [authError, setAuthError] = useState(' ')
    const [userRole, setUserRole] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [searchData, setSearchData] = useState({})

    console.log(searchData)

    useEffect(() => {
        getUserRole(user)
            .then(data => {
                console.log(data)
                setUserRole(data)
            })
    }, [])


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/`)
    }, [])
    const onSubmit = event => {
        const hostId = event.hostId
        const classTeacher = event.classTeacher

        const searchData = {
            hostId,
            classTeacher
        }
        setSearchData(searchData)

        setLoading(true)
        axios.post(`${process.env.REACT_APP_API_URL}/hostsearch`, searchData)
            .then(res => {
                console.log(res)
                if (res.data.status === "success") {
                    navigate('/employeesignup')
                    const accessToken = res?.data?.token
                    localStorage.setItem("accessToken", accessToken);
                } else {
                    toast.error(res.data.message)
                }
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    console.log(searchData)
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
                            <div className='flex flex-col w-full rounded-md max-w-md sm:p-20  bg-gray-100 text-gray-900'>
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
                                                placeholder='Type Employee ID'
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                                data-temp-mail-org='0'
                                                {...register("hostId")}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor='email' className='block mb-2 text-sm'>
                                                Class Teacher OF
                                            </label>
                                            <select className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                                                {...register("classTeacher")}
                                            >
                                                <option>Select Class</option>
                                                <option value='class-03'>Class 03</option>
                                                <option value='class-05'>Class 05</option>
                                                <option value='class-06'>Class 06</option>
                                                <option value='class-07'>Class 07</option>
                                                <option value='class-08'>Class 08</option>
                                                <option value='class-09'>Class 09</option>
                                                <option value='class-10'>Class 09</option>
                                                <option value='class-11'>Alim 1st</option>
                                                <option value='class-12'>Alim 2nd</option>
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