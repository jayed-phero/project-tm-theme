import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const images = [
        { img: "1", img: "https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { img: "1", img: "https://images.pexels.com/photos/40896/larch-conifer-cone-branch-tree-40896.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { img: "1", img: "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { img: "1", img: "https://images.pexels.com/photos/47334/meadow-grass-palm-tree-forest-plenty-of-natural-light-47334.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { img: "1", img: "https://images.pexels.com/photos/568236/pexels-photo-568236.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { img: "1", img: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600" },
    ]
    return (
        <div className='footerBt print:hidden'>
            <div className='border-b-2 border-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:px-52 gap-7 px-5 md:px-20 py-11'>
                <div>
                    <h3 className='uppescase pb-7 text-3xl font-semibold font-semibold text-white'><i class="text-4xl fa-solid fa-graduation-cap text-regal-orange"></i> Eduma</h3>
                    <p className='text-gray-500'>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                    <div className=' pt-5 flex items-center gap-5 text-white text-xl'>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-google"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-skype"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-2xl font-semibold text-white pb-7'>Quick Links</h3>
                    <p className='text-gray-500 pb-3'>
                        <i class="fa-solid fa-angles-right pr-3"></i>
                        <Link>Home</Link>
                    </p>
                    <p className='text-gray-500 pb-3'>
                        <i class="fa-solid fa-angles-right pr-3"></i>
                        <Link>About Us</Link>
                    </p>
                    <p className='text-gray-500 pb-3'>
                        <i class="fa-solid fa-angles-right pr-3"></i>
                        <Link>Students Corner</Link>
                    </p>
                    <p className='text-gray-500 pb-3'>
                        <i class="fa-solid fa-angles-right pr-3"></i>
                        <Link>Faculties</Link>
                    </p>
                    <p className='text-gray-500 pb-3'>
                        <i class="fa-solid fa-angles-right pr-3"></i>
                        <Link>Achievenment</Link>
                    </p>
                    <p className='text-gray-500 pb-3'>
                        <i class="fa-solid fa-angles-right pr-3"></i>
                        <Link>Contact</Link>
                    </p>
                </div>
                <div className='xl:-ml-20'>
                    <h3 className='text-2xl font-semibold text-white pb-7'>Recent News</h3>
                    <div className='grid grid-cols-3 gap-3'>
                        {
                            images.map(image =>
                                <img
                                    src={image.img}
                                    alt=""
                                    className='h-20 w-full '
                                />
                            )
                        }
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-white pb-7'>Contact Us</h3>
                    <p className='text-gray-500 pb-5'>
                        <i class="text-lg pr-3 text-regal-orange fa-solid fa-location-dot"></i>
                        503 Old Buffalo Street Northwest #205, New York-3087.
                    </p>
                    <p className='text-gray-500 pb-5'>
                        <i class="text-lg pr-3 text-regal-orange fa-solid fa-phone"></i>
                        +0081234567
                    </p>
                    <p className='text-gray-500 pb-5'>
                        <i class="text-lg pr-3 text-regal-orange fa-regular fa-envelope"></i>
                        supportedu@gmail.com
                    </p>
                </div>
            </div>
            <div className='flex items-center md:justify-between justify-center md:flex-row flex-col text-gray-500 py-5 xl:px-52 gap-3 px-5 md:px-20'>
                <h3>All Right Reserved by Eduma.</h3>
                <h3>Terms of use Privacy policy</h3>
            </div>
        </div>
    );
};

export default Footer;