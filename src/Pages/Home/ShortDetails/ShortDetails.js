import React from 'react';
import './ShortDetails.css'

const ShortDetails = () => {

    const shortDetails = [
        {
            icon: <i class="fa-solid fa-chalkboard-user"></i>,
            number: "300",
            title: "Teachers"
        },
        {
            icon: <i class="fa-solid fa-school"></i>,
            number: "1700",
            title: "Classrooms"
        },
        {
            icon: <i class="fa-solid fa-graduation-cap"></i>,
            number: "11,900",
            title: "Students"
        },
        {
            icon: <i className="fa-solid fa-building-columns"></i>,
            number: "0000",
            title: "Founded"
        },
    ]
    return (
        <div className='shortDetails grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-16 py-20 sm:px-20 xl:px-52 px-5'>
            {
                shortDetails.map((details, i) =>
                    <div key={i} className='flex items-center flex-col justify-center border-dotted border-2 border-white  rounded-3xl relative w-full py-12 '>
                        <p className='text-7xl text-regal-orange pb-2'>{details.icon}</p>
                        <h3 className='text-white text-xl font-semibold'>{details.title}</h3>
                        <h1 className='bg-white w-32 py-2 flex items-center justify-center absolute -bottom-6 text-3xl font-bold text-black '>{details.number}</h1>
                    </div>
                )
            }
        </div>
    );
};

export default ShortDetails;