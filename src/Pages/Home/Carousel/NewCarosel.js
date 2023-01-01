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
                <div class="flex justify-center w-full">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
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
                            <div className="w-full relative">
                                <img class="w-full h-full  object-cover" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                <div
                                    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                                >
                                    <div class="flex justify-center items-center h-full">
                                        <div class="text-white">
                                            <AnimatedText
                                                type="chars" // animate words or chars
                                                animation={{
                                                    x: '200px',
                                                    y: '-20px',
                                                    scale: 1.1,
                                                    ease: 'ease-in-out',
                                                }}
                                                animationType="rifle"
                                                interval={0.06}
                                                duration={0.8}
                                                tag="p"
                                                className="animated-paragraph font-semibold lg:text-6xl text-3xl mb-6  w-2/3 mx-auto"
                                                includeWhiteSpaces
                                                threshold={0.1}
                                                rootMargin="20%"
                                            >
                                                Welcome to new way University of TMKMT
                                            </AnimatedText>
                                            <AnimatedText
                                                type="chars" // animate words or chars
                                                animation={{
                                                    x: '200px',
                                                    y: '-20px',
                                                    scale: 1.1,
                                                    ease: 'ease-in-out',
                                                }}
                                                animationType="rifle"
                                                interval={0.06}
                                                duration={0.8}
                                                tag="p"
                                                className="animated-paragraph font-semibold text-lg mb-6 w-2/3 mx-auto"
                                                includeWhiteSpaces
                                                threshold={0.1}
                                                rootMargin="20%"
                                            >
                                                Positive behavioral supports is a behavior management system
                                            </AnimatedText>
                                            <a
                                                class="border-2 border-regal-orange bg-regal-orange px-7 py-2 lg:px-11 py-3 hover:bg-transparent"
                                                href="#!"
                                                role="button"
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                            >Learn More</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img class="object-cover w-full h-96 lg:w-4/5" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img class="object-cover w-full h-96  lg:w-4/5" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img class="object-cover w-full h-96 lg:w-4/5" src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
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
                        <img class="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                </Swiper> */}
            </div>
        </div>
    );
};

export default NewCarosel;
