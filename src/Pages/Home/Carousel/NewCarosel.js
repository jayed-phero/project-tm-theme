import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedText from 'react-animated-text-content';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import './Carousel.css'


const NewCarosel = () => {
    return (
        <div className=''>
            <div class="container text-center">
                <div class="flex justify-center w-full h-full">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        effect={"fade"}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay,
                            EffectFade, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        <div className="w-full h-full relative">
                                <img class="w-full h-full lg:w- object-cover" src="https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                                <div
                                    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed backColor"
                                >
                                    <div class="flex items-center text-left lg:px-52 px-6 h-full">
                                        <div class="text-white">
                                            <h3 className='uppercase text-lg font-medium pb-7 uppercase'>The Best Time For</h3>
                                            <AnimatedText
                                                type="words" 
                                                animation={{
                                                    x: '200px',
                                                    y: '-20px',
                                                    scale: 1.1,
                                                    ease: 'ease-in-out',
                                                }}
                                                animationType="float"
                                                interval={0.06}
                                                duration={0.8}
                                                tag="p"
                                                className="animated-paragraph font-semibold lg:text-7xl text-4xl mb-6 uppercase"
                                                includeWhiteSpaces
                                                threshold={0.1}
                                                rootMargin="20%"
                                            >
                                                University
                                            </AnimatedText>
                                            <div className="md:w-56 md:h-11 flex w-44 h-11 items-center justify-center bg-regal-orange rounded mt-5  uppercase text-base hover:bg-blue-600 cursoe-pointer">Learn More</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="w-full h-full relative">
                                <img class="w-full h-full lg:w- object-cover" src="https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                                <div
                                    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed backColor"
                                >
                                    <div class="flex items-center text-left lg:px-52 px-6 h-full">
                                        <div class="text-white">
                                            <h3 className='uppercase text-lg font-medium pb-7 uppercase'>The Best Time For</h3>
                                            <AnimatedText
                                                type="words" 
                                                animation={{
                                                    x: '200px',
                                                    y: '-20px',
                                                    scale: 1.1,
                                                    ease: 'ease-in-out',
                                                }}
                                                animationType="float"
                                                interval={0.06}
                                                duration={0.8}
                                                tag="p"
                                                className="animated-paragraph font-semibold lg:text-7xl text-4xl mb-6 uppercase"
                                                includeWhiteSpaces
                                                threshold={0.1}
                                                rootMargin="20%"
                                            >
                                                World
                                            </AnimatedText>
                                            <div className="md:w-56 md:h-11 flex w-44 h-11 items-center justify-center bg-regal-orange rounded mt-5  uppercase text-base hover:bg-blue-600 cursoe-pointer">Learn More</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="w-full h-full relative">
                                <img class="w-full h-full lg:w- object-cover" src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                                <div
                                    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed backColor"
                                >
                                    <div class="flex items-center text-left lg:px-52 px-6 h-full">
                                        <div class="text-white">
                                            <h3 className='uppercase text-lg font-medium pb-7 uppercase'>The Best Time For</h3>
                                            <AnimatedText
                                                type="words" 
                                                animation={{
                                                    x: '200px',
                                                    y: '-20px',
                                                    scale: 1.1,
                                                    ease: 'ease-in-out',
                                                }}
                                                animationType="float"
                                                interval={0.06}
                                                duration={0.8}
                                                tag="p"
                                                className="animated-paragraph font-semibold lg:text-7xl text-4xl mb-6 uppercase"
                                                includeWhiteSpaces
                                                threshold={0.1}
                                                rootMargin="20%"
                                            >
                                                Learnpress
                                            </AnimatedText>
                                            <div className="md:w-56 md:h-11 flex w-44 h-11 items-center justify-center bg-regal-orange rounded mt-5  uppercase text-base hover:bg-blue-300">Learn More</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default NewCarosel;
