import React from 'react';
import EventRow from './EventRow';

const Events = () => {
    const eventData = [
        {
            image: " https://c4.wallpaperflare.com/wallpaper/935/849/231/background-tree-book-wallpaper-preview.jpg"
        },
        {
            image: "https://c4.wallpaperflare.com/wallpaper/526/8/1002/library-interior-interior-design-books-wallpaper-preview.jpg"
        },
        {
            image: "https://c4.wallpaperflare.com/wallpaper/54/325/66/work-in-progress-wallpaper-preview.jpg",

        }
    ]
    return (
        <div className='xl:px-52 md:px-20 md:py-20 px-5'>
            {/* <div className='flex flex-col md:flex-row justify-between items-center pb-9'>
                <div>
                    <h1 className='font-bold text-2xl text-regal-orange'>BLOG & NEWS</h1>
                    <h3 className='font-bold text-3xl pb-2 w-2/3'>We keep you always updated with our fresh blog posts</h3>
                </div>
                <button className='mt-3 md:mt-0 px-3 hover:border-orange-500 py-1.5 border font-semibold border-gray-300 uppercase text-sm'>VIEW ALL</button>
            </div> */}
            {/* <div class="mt-6 md:flex md:items-center md:justify-between">
                <div>
                    <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                       Blogs & News
                    </h1>

                    <div class="flex mx-auto mt-6">
                        <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                        <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                    </div>
                </div>

                <div class="flex justify-between mt-8 md:mt-0">
                    <button title="left arrow" class="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button title="right arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div> */}
            <div class="container px-6 py-5 mx-auto">
                <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Blogs & <span className='text-regal-orange'>News</span></h1>
                <p class="max-w-2xl mx-auto mt-3 text-center text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>
                <div className='flex justify-center mx-auto items-center gap-3 py-5'>
                    <p className='h-1 w-16 bg-black'></p>
                    <i className="fa-solid fa-graduation-cap text-black"></i>
                    <p className='h-1 w-16 bg-black'></p>
                </div>

                {/* <div class="flex justify-center mx-auto mt-6">
                    <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div> */}
               
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7'>
                {
                    eventData.map((event, i) => <EventRow key={i} event={event}></EventRow>)
                }
            </div>
        </div>
    );
};

export default Events;