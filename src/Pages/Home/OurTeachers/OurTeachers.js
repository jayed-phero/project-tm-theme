import React from 'react';
import { Link } from 'react-router-dom';
import './OurTeachers.css';

const OurTeachers = () => {
    const teachersInfo = [
        {
            image: "https://cdn.pixabay.com/photo/2012/10/10/15/57/man-60655__340.jpg",
            name: "First Teacher",
            desi: "Arabic Lecturer",
            title: "Hons, in Arabic",
            social: [
                {
                    link: "fblick",
                    icon: <i class="fa-brands fa-facebook"></i>
                },
                {
                    link: "fblick",
                    icon: <i class="fa-brands fa-telegram"></i>
                },
                {
                    link: "fblick",
                    icon: <i class="fa-brands fa-whatsapp"></i>
                },
                {
                    link: "fblick",
                    icon: <i class="fa-regular fa-envelope"></i>
                }
            ]
        },
        {
            image: "https://cdn.pixabay.com/photo/2019/02/21/07/55/uae-4010835__340.jpg",
            name: "Like Teacher",
            desi: "Fiqh Lecturer",
            title: "Usul, in Arabic",
            social: [
                {
                    link: "fblick",
                    icon: <i class="fa-brands fa-facebook"></i>
                },
                {
                    link: "fblick",
                    icon: <i class="fa-brands fa-telegram"></i>
                },
                {
                    link: "fblick",
                    icon: <i class="fa-brands fa-whatsapp"></i>
                },
                {
                    link: "fblick",
                    icon: <i class="fa-regular fa-envelope"></i>
                }
            ]
        },
        {
            image: "https://cdn.pixabay.com/photo/2017/06/04/04/42/archaeological-2370325__340.jpg",
            name: "Example Teacher",
            desi: "Math Instructor",
            title: "MBA, in LAW",
            social: [
                {
                    link: "fblick",
                    icon: <i class="fa-brands fa-facebook"></i>
                },
                {
                    link: "fblick",
                    icon: <i class="fa-brands fa-telegram"></i>
                },
                {
                    link: "fblick",
                    icon: <i class="fa-brands fa-whatsapp"></i>
                },
                {
                    link: "fblick",
                    icon: <i class="fa-regular fa-envelope"></i>
                }
            ]
        },
        {
            image: "https://cdn.pixabay.com/photo/2012/10/10/15/57/man-60655__340.jpg",
            name: "Fourth Teacher",
            desi: "English Lecturer",
            title: "MBA, in English",
            social: [
                {
                    link: "fblick",
                    icon: <i class="fa-brands fa-facebook"></i>
                },
                {
                    link: "fblick",
                    icon: <i class="fa-brands fa-telegram"></i>
                },
                {
                    link: "fblick",
                    icon: <i class="fa-brands fa-whatsapp"></i>
                },
                {
                    link: "fblick",
                    icon: <i class="fa-regular fa-envelope"></i>
                }
            ]
        }
    ]
    return (
        <div className='teachersInfo lg:px-52 py-20 px-5'>
            <div className='mb-9 text-white'>
                <h3 className='text-2xl text-regal-orange font-semibold'>OUR TEACHERS</h3>
                <h4 className='text-4xl font-semibold py-2'>Learn a new skills online on your time</h4>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 shadow-xl'>
                {
                    teachersInfo.map((info, i) =>
                        <div key={i} className='bg-white rounded-xl flex flex-col items-center'>
                            <img className='w-full h-40 rounded-t-xl' src={info.image} alt="" />
                            <div className='flex flex-col items-center -mt-7'>
                                <img className='w-16 h-16 rounded-full border-4 border-white' src={info.image} alt="" />
                                <h3 className='text-gray-400 font-semibold text-xl'>{info.name}</h3>
                            </div>
                            <div className='border-b-2 pb-3 border-gray-400 pb-'>
                                <h2>{info.desi}</h2>
                                <p>{info.title}</p>
                            </div>
                            <div className='flex items-center my-5 gap-2'>
                                {
                                    info.social.map((info, i) =>
                                        <div key={i} className='h-7 w-7 rounded-full border-2 border-regal-orange flex items-center justify-center bg-regal-orange hover:bg-transparent ease-in duration-500 text-white hover:text-regal-orange'>
                                            <Link>{info.icon}</Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default OurTeachers;