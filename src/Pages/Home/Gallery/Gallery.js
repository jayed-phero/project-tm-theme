import { Carousel } from 'flowbite-react';
import React from 'react';

const Gallery = () => {
    return (
        <div>
            <section class="overflow-hidden text-gray-700 lg:mt-20 mt-5">
                <div class="container px-5 py-2 mx-auto pt-16 lg:pt-11 lg:px-52 ">
                    <div class="flex flex-wrap -m-1 md:-m-2">
                        <div class="flex flex-wrap w-1/2">
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                            </div>
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="w-full p-1 md:p-2">
                                {/* <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/> */}
                                <div className="h-40 w-full sm:h-64 xl:h-96">
                                    <Carousel
                                        slideInterval={3000}
                                        indicators={false}
                                        leftControl=" "
                                        rightControl=" "
                                    >
                                        <img
                                            className='block object-cover object-center w-full h-full rounded-lg'
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                                            alt="..."
                                        />
                                        <img
                                            className='block object-cover object-center w-full h-full rounded-lg'
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                                            alt="..."
                                        />
                                        <img
                                            className='block object-cover object-center w-full h-full rounded-lg'
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                                            alt="..."
                                        />
                                    </Carousel>
                                </div>
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;