import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='xl:px-52 py-20'>
            <div className='flex items-center gap-12'>
                <div className='w-full'>
                    <h3 className='text-2xl text-regal-orange font-semibold'>ABOUT US</h3>
                    <h4 className='text-3xl font-semibold py-2'>Learn a new skills online on your time</h4>
                    <div className='text-lg text-thin text-gray-700'>
                        <p className='pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                    </div>
                    <h3 className='w-32 py-2 my-5 bg-regal-orange flex justify-center font-semibold'>READ MORE</h3>
                </div>
                <div className='w-full'>
                    <iframe className='h-full w-full aboutVideo' src="https://www.youtube.com/embed/F77QwpliDlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default About;