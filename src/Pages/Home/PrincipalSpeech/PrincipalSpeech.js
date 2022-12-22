import React from 'react';
import ScrollToTop from '../../../hooks/Scrool-to-top';
import './PrincipalSpeech.css';

const PrincipalSpeech = () => {
    return (
        <section class="bg-white dark:bg-gray-900 px-6 xl:px-52">
            <ScrollToTop/>
            <div class="container py-11 lg:py-20 mx-auto">
                <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 principalIntro md:h-96 lg:h-[31rem]  " src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                    <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                        <p class="text-sm text-regal-orange uppercase font-semibold">importance</p>

                        <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                            One Of The Fastest Way To Gain Business Success
                        </a>

                        <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-lg">
                            Corpkit is a global management consulting service company. Corpkit has the trusted advisor to the world's leading businesses, finance, and institutions. Corpkit Business Consulting WP Theme is the most modern and feature-rich Theme. This Business Consulting WP Theme is designed for various business and consulting services.
                        </p>

                        <a href="#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                        <div class="flex items-center mt-6">
                            <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="" />

                            <div class="mx-4">
                                <h1 class="text-sm text-gray-700 dark:text-gray-200">Amelia Anderson</h1>
                                <p class="text-sm text-regal-orange dark:text-gray-400">Principal of TMKMT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrincipalSpeech;

{/* <div className='xl:px-52'>
<div className='relative '>
    <img className='h-full w-full rounded-xl' src="https://cdn.pixabay.com/photo/2016/03/24/13/45/coffee-1276782__340.jpg" alt="" />
    <div className='absolute left-5 bottom-5 w-96 bg-white rounded-lg p-3 '>
        <h3 className='text-2xl font-semibold'>Example Person</h3>
        <p className='font-semibold py-2'>Cheaf Minister</p>
        <p className='text-gray-400'>“At Eduma University, we are moving boldly — and concertedly — to expand tomorrow's frontiers. We believe that we have the power to shape the future, for the better.”</p>
    </div>
</div> */}
// </div >