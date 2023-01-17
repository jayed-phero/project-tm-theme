import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import ScrollToTop from '../../../hooks/Scrool-to-top';

const StudentProfile = () => {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const [studentRole, setHostRole] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/studentroledata/${user?.email}`)
            .then(res => {
                console.log(res)
                setHostRole(res?.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [user?.email])

    console.log(studentRole)

    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/')
            })
    }
    return (
        <div className='px-6 xl:px-52'>
            <ScrollToTop/>
            {
                studentRole && studentRole?.data?.role === "student" ?

                    <div className='flex items-center justify-center min-h-screen'>
                        <div className="max-w-md p-8 sm:flex dark:bg-gray-900 dark:text-gray-100 gap-5">
                            <div className=" w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                <img src={user?.photoURL} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                                <button onClick={handleLogout} className='px-3 py-2 rounded bg-regal-orange mt-2  text-white w-full'>Sign Out</button>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                                    <span className="text-sm dark:text-gray-400">Student of TMKMT</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                            <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                        </svg>
                                        <span className="dark:text-gray-400">{user?.email}</span>
                                    </span>
                                    <span className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                                            <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                                        </svg>
                                        <span className="dark:text-gray-400">{studentRole.nameOfClass}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <div className='flex items-center flex-col justify-center my-11 md:my-20 border-2 border-regal-orange bg-white rounded-xl md:p-16 p-7'>
                        <h3 className='text-xl md:text-3xl font-semibold text-center w-2/3'>Hey we are very sorry for that, You are not a student of <span className='text-regal-orange'>TMKMT.</span> if you become a student of <span className='text-regal-orange'>TMKMT</span> , you will see your profile here.</h3>
                    {/* <p className='text-center pt-3'>{studentRole?.message}</p> */}
                    </div>
            }
        </div>
    );
};

export default StudentProfile;