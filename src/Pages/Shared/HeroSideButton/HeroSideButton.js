import React from 'react';

const HeroSideButton = () => {
    return (
        <div className='fixed right-0 top-48 z-50'>
            <div className='h-16 hover:bg-green-400 hover:text-white w-14 bg-white flex flex-col items-center justify-center rounded-lg mb-1.5 shadow-lg'>
                <i className="hover:text-white text-green-400 fa-solid fa-bars text-lg"></i>
                <p className='text-sm font-semibold'>Menu</p>
            </div>
            <div className='h-16 hover:bg-orange-400 hover:text-white w-14 bg-white flex flex-col items-center justify-center rounded-lg mb-1.5 shadow-lg'>
                <i className="hover:text-white text-orange-400 fa-regular fa-user text-lg"></i>
                <p className='text-sm font-semibold '>Profile</p>
            </div>
            <div className='h-16 hover:bg-sky-400 hover:text-white w-14 bg-white flex flex-col items-center justify-center rounded-lg z-50 shadow-lg'>
                <i class="hover:text-white text-sky-400 fa-solid fa-house text-lg"></i>
                <p className='text-sm font-semibold'>Home</p>
            </div>
        </div >
    );
};

export default HeroSideButton;