import React from 'react';
import './FreequentlyAQ.css'

const FreequrntlyAQ = () => {
    return (
        <div className='freeQuently'>
            <div className='flex items-center flex-col md:flex-row'>
                <div class="relative overflow-hidden bg-no-repeat bg-cover w-full h-full">
                    <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" class="w-full h-full" alt="Louvre" />
                    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-50 bg-indigo-700"></div>
                </div>
                <div className='w-full p-12 h-full freeAQbg'>
                    <h3 className='text-xl font-semibold text-regal-orange pb-5 uppercase'>Faquality ask question</h3>
                    <h1 className='text-3xl font-semibold text-white'>Some FAQ's</h1>
                    <div className='flex items-center gap-3 py-5'>
                        <p className='h-1 w-16 bg-white'></p>
                        <i className="fa-solid fa-graduation-cap text-white"></i>
                        <p className='h-1 w-16 bg-white'></p>
                    </div>
                    <div className='mt-5'>
                        <div tabIndex={0} className="collapse collapse-plus border border-regal-orange bg-transparent rounded mb-3">
                            <div className="collapse-title text-xl font-medium text-white">
                                Focus me to see content
                            </div>
                            <div className="collapse-content text-white">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-regal-orange bg-transparent rounded mb-3">
                            <div className="collapse-title text-xl font-medium text-white">
                                Focus me to see content
                            </div>
                            <div className="collapse-content text-white">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-regal-orange bg-transparent rounded mb-3">
                            <div className="collapse-title text-xl font-medium text-white">
                                Focus me to see content
                            </div>
                            <div className="collapse-content text-white">
                                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreequrntlyAQ;