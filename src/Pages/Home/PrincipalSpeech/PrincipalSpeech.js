import React from 'react';

const PrincipalSpeech = () => {
    return (
        <div className='xl:px-52'>
            <div className='relative '>
                <img className='h-full w-full rounded-xl' src="https://cdn.pixabay.com/photo/2016/03/24/13/45/coffee-1276782__340.jpg" alt="" />
                <div className='absolute left-5 bottom-5 w-96 bg-white rounded-lg p-3 '>
                    <h3 className='text-2xl font-semibold'>Example Person</h3>
                    <p className='font-semibold py-2'>Cheaf Minister</p>
                    <p className='text-gray-400'>“At Eduma University, we are moving boldly — and concertedly — to expand tomorrow's frontiers. We believe that we have the power to shape the future, for the better.”</p>
                </div>
            </div>
        </div>
    );
};

export default PrincipalSpeech;