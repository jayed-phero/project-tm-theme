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
            <div className='flex flex-col md:flex-row justify-between items-center pb-9'>
                <div>
                    <h1 className='font-bold text-2xl text-regal-orange'>BLOG & NEWS</h1>
                    <h3 className='font-bold text-3xl pb-2 w-2/3'>We keep you always updated with our fresh blog posts</h3>
                </div>
                <button className='mt-3 md:mt-0 px-3 hover:border-orange-500 py-1.5 border font-semibold border-gray-300 uppercase text-sm'>VIEW ALL</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    eventData.map((event, i) => <EventRow key={i} event={event}></EventRow>)
                }
            </div>
        </div>
    );
};

export default Events;