import { Carousel } from 'flowbite-react';
import React from 'react';
import AnimatedText from 'react-animated-text-content';
import ScrollToTop from '../../../hooks/Scrool-to-top';
import './Carousel.css';

const HomeCarosel = () => {
    return (
        <div>
            <div className=" h-[31rem] carouselHeight md:h-[35rem] lg:h-[51rem] ">
                <ScrollToTop/>
                <Carousel slideInterval={7000}>
                    <div className="flex h-full items-center justify-center">
                        <div
                            class="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover backImage"

                        >
                            <div
                                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed backColor"
                            >
                                <div class="flex justify-center items-center h-full">
                                    <div class="text-white">
                                        {/* <h2 class="font-semibold lg:text-6xl text-3xl mb-4">
                                            Welcome to new <br /> way <span className='text-regal-orange'>University</span> of <span className='text-regal-orange'>TMKMT</span>
                                        </h2> */}
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
                    </div>
                    <div className="flex h-full items-center justify-center">
                        <div
                            class="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover backImage"

                        >
                            <div
                                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed backColor"
                            >
                                <div class="flex justify-center items-center h-full">
                                    <div class="text-white">
                                        {/* <h2 class="font-semibold lg:text-6xl text-3xl mb-4">
                                            Welcome to new <br /> way <span className='text-regal-orange'>University</span> of <span className='text-regal-orange'>TMKMT</span>
                                        </h2> */}
                                        <AnimatedText
                                            type="words" // animate words or chars
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
                                            className="animated-paragraph font-semibold lg:text-6xl text-3xl mb-6  w-2/3 mx-auto text-regal-orange"
                                            includeWhiteSpaces
                                            threshold={0.1}
                                            rootMargin="20%"
                                        >
                                            Education is one thing no one can take away from you.
                                        </AnimatedText>
                                        <AnimatedText
                                            type="words" // animate words or chars
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
                    </div>
                    <div className="flex h-full items-center justify-center">
                        <div
                            class="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover backImage"

                        >
                            <div
                                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed backColor"
                            >
                                <div class="flex justify-center items-center h-full">
                                    <div class="text-white">
                                        {/* <h2 class="font-semibold lg:text-6xl text-3xl mb-4">
                                            Welcome to new <br /> way <span className='text-regal-orange'>University</span> of <span className='text-regal-orange'>TMKMT</span>
                                        </h2> */}
                                        <AnimatedText
                                            type="chars" // animate words or chars
                                            animation={{
                                                x: '200px',
                                                y: '-20px',
                                                scale: 1.1,
                                                ease: 'ease-in-out',
                                            }}
                                            animationType="diagonal"
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
                                            type="words" // animate words or chars
                                            animation={{
                                                x: '200px',
                                                y: '-20px',
                                                scale: 1.1,
                                                ease: 'ease-in-out',
                                            }}
                                            animationType="throw"
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
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default HomeCarosel;