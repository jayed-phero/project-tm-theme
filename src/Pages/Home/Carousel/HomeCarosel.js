import { Carousel } from 'flowbite-react';
import React from 'react';
import './Carousel.css';

const HomeCarosel = () => {
    return (
        <div>
            <div className=" carouselHeight">
                <Carousel>
                    <div className="flex h-full items-center justify-center">
                        <div
                            class="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover backImage"

                        >
                            <div
                                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed backColor"
                            >
                                <div class="flex justify-center items-center h-full">
                                    <div class="text-white">
                                        <h2 class="font-semibold lg:text-6xl text-3xl mb-4">
                                            Welcome to new <br /> way <span className='text-regal-orange'>University</span> of <span className='text-regal-orange'>TMKMT</span>
                                        </h2>
                                        <h4 class="font-semibold text-lg mb-6">Positive behavioral supports is a behavior management system</h4>
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
                                        <h2 class="font-semibold lg:text-6xl text-3xl mb-4">
                                            Welcome to new <br /> way <span className='text-regal-orange'>University</span> of <span className='text-regal-orange'>TMKMT</span>
                                        </h2>
                                        <h4 class="font-semibold text-lg mb-6">Positive behavioral supports is a behavior management system</h4>
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
                                        <h2 class="font-semibold lg:text-6xl text-3xl mb-4">
                                            Welcome to new <br /> way <span className='text-regal-orange'>University</span> of <span className='text-regal-orange'>TMKMT</span>
                                        </h2>
                                        <h4 class="font-semibold text-lg mb-6">Positive behavioral supports is a behavior management system</h4>
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