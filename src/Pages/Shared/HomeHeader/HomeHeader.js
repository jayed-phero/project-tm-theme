import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import './HomeHeader.css';
import { getUserRole } from './user';

const HomeHeader = () => {
    const { user } = useContext(AuthContext)
    const [studentRole, setHostRole] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/studentroledata/${user?.email}`)
            .then(res => {
                console.log(res)
                setHostRole(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [user?.email])


    return (
        <div className='homeHeader print:hidden sm:px-20 md:px-32 lg:px-52 flex flex-col lg:flex-row px-5 md:py-2 pt-3 items-center justify-center text-white'>
            <div className='flex items-center lg:pr-16 justify-center md:justify-start'>
                {
                    studentRole && studentRole !== 'student' ?
                        <Link to='/studentprofile' className='bg-orange-400 px-3  py-2 rounded flex items-center mr-2 font-semibold hover:bg-white hover:text-orange-400 ease-in duration-300 cursor-pointer'><button>MyProfile</button></Link>
                        :
                        <>
                            <Link to='/admission' className='bg-orange-400 px-3  py-2 rounded flex items-center mr-2 font-semibold hover:bg-white hover:text-orange-400 ease-in duration-300 cursor-pointer'><button>Admission</button></Link>
                        </>
                }
                <Link to='/notice' className='bg-orange-400 px-5 rounded py-2 font-semibold hover:bg-white hover:text-orange-400 ease-in duration-300 cursor-pointer'><button>Notice</button></Link>
            </div>
            <div className='py-2 lg:py-0'>
                <div className=' flex items-center md:pt-0'>
                    <div className='md:flex items-center pr-7 hidden '>
                        <i className=" fa-solid fa-bullhorn pr-3"></i>
                        <h3 className=' font-bold '>Announcement</h3>
                    </div>
                    <marquee behavior="scrool" direction="">Welcome to Ta'mirul Millat Kamil Madrasah. Your  dream will come true, In Sha Allah. Work hard and be prepare for your right dream.</marquee>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;


{/* <div className='flex items-center lg:pr-16 justify-center md:justify-start'>
    {
        studentRole && studentRole !== 'admin' ?
            <>
                {
                    userRole === 'employee' ?
                        <>
                            <Link to='/dashboard' className='bg-orange-400 px-5 rounded py-2 font-semibold hover:bg-white hover:text-orange-400 ease-in duration-300 cursor-pointer'><button>Dashboard</button></Link>
                        </>

                        :
                        <>
                            <Link to='/' className='bg-orange-400 px-3  py-2 rounded flex items-center mr-2 font-semibold hover:bg-white hover:text-orange-400 ease-in duration-300 cursor-pointer'><button>MyProfile</button></Link>
                        </>
                }
            </>
            :
            <>
                <Link to='/admission' className='bg-orange-400 px-3  py-2 rounded flex items-center mr-2 font-semibold hover:bg-white hover:text-orange-400 ease-in duration-300 cursor-pointer'><button>Admission</button></Link>
            </>
    }
    <Link to='/notice' className='bg-orange-400 px-5 rounded py-2 font-semibold hover:bg-white hover:text-orange-400 ease-in duration-300 cursor-pointer'><button>Notice</button></Link>
</div> */}