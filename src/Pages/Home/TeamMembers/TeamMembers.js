import React, { useContext, useEffect, useState } from 'react';
import { useData } from '../../../Context/DataProvider';
import './TeamMember.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TeamMembers = () => {
    // const { state } = useData()
    // console.log(state)
    const [teamData, setTeamData] = useState([])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    useEffect(() => {
        fetch('pro.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setTeamData(data)
        })
    }, [])


    // const teamData = [
    //     {
    //         name: "arthur melo",
    //         image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    //         desig: "design director"
    //     },
    //     {
    //         name: "Pamela Anderson",
    //         image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    //         desig: "Lead Developer"
    //     },
    //     {
    //         name: "John Doe",
    //         image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    //         desig: "Full stack developer"
    //     },
    //     {
    //         name: "John Doe",
    //         image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    //         desig: "Full stack developer"
    //     },
    //     {
    //         name: "John Doe",
    //         image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    //         desig: "Full stack developer"
    //     },
    //     {
    //         name: "John Doe",
    //         image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    //         desig: "Full stack developer"
    //     }
    // ]
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="h-[32rem] bg-gray-100 dark:bg-gray-800">
                <div class="container px-6 lg:py-24 py-10   mx-auto">
                    <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">The Executive Team</h1>

                    <div class="flex justify-center mx-auto mt-6">
                        <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                        <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                    </div>

                    <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                    </p>
                </div>
            </div>

            <div class="container px-6 py-10 mx-auto -mt-56 sm:-mt-64 md:-mt-68 xl:px-52">
                {/* <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3"> */}
                <div className='mt-8 xl:mt-16'>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        // autoPlay={true}
                        autoPlaySpeed={5000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet"]}
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {
                            teamData.map(team =>
                                <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700 sm:mr-5">
                                    <img class="object-cover w-full rounded-xl aspect-square" src={team.image} alt="" />

                                    <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">{team.name}</h1>

                                    <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">{team.desig}</p>

                                    <div class="flex mt-3 -mx-2">
                                        <a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                                            <i class="fa-brands fa-telegram"></i>
                                        </a>

                                        <a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                                            <i class="fa-brands fa-facebook"></i>
                                        </a>

                                        <a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                                            <i class="fa-brands fa-whatsapp"></i>
                                        </a>
                                    </div>
                                </div>
                            )
                        }
                    </Carousel>
                </div>
                {/* </div> */}

            </div>
        </section>
    );
};

export default TeamMembers;