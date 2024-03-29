import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import { dataDigitalBestSeller } from "./data";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            
            style={{ display: "none"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className}`}
            style={{ display: "none" }}
            onClick={onClick}
        />
    );
}

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={`${className} mb-32`}
//             style={{ display: "none", background: "gray", padding: "21px", borderRadius: "50%", border: "1px solid gray", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "1" }}
//             onClick={onClick}
//         />
//     );
// }

export default class PreviousNextMethods extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };

        const teachersInfo = [
            {
                image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80",
                name: "Muhammad Monem",
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
                image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                name: "Abdur Rahman",
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
                image: "https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                name: "Abdullah ALi",
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
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                name: "Iqbal Hussain",
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
            },
            {
                image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                name: "ShiphiUllah Khan",
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
                image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                name: "Abu Siddik",
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
        ]
        return (
            <div data-aos="fade-up" className="px-3 md:px-20 lg:px-32 xl:px-52 py-16 py-11 bg-gray-100">
                <div class="px-7">
                    <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our Executive Team</h1>

                    <p class="md:hidden max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat.
                    </p>
                    <p class="hidden md:block max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                    </p>
                </div>

                <div className="mt-8 relative">
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        {teachersInfo.map((teacher) => (
                            <div className='p-2 bg-white rounded-xl'>
                                <div class="flex flex-col items-center justify-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                                    <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={teacher.image} alt="" />

                                    <h1 class="mt-4 text-xl md:text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{teacher.name}</h1>

                                    <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{teacher.desi}</p>

                                    <div class="flex mt-3 -mx-2">
                                        {
                                            teacher.social.map(item =>
                                                <Link class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                                                    {item.icon}
                                                </Link>
                                            )
                                        }

                                        {/* <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                                            <i class="fa-solid fa-envelope"></i>
                                        </a>

                                        <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                                            <i class="fa-brands fa-whatsapp"></i>
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    {/* <div className="absolute top-40">
                        <div class="flex justify-between md:mt-0">
                            <button title="left arrow" class="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100" onClick={this.previous}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button title="right arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100" onClick={this.next}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}