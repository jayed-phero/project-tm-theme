import React from 'react';

const NoticeSkeleton = () => {

    return (
        <div>
            <div role="status" class="animate-pulse ">
                {
                    [1, 2, 3].map(notice =>
                        <div key={notice._id} className="flex items-start gap-7  my-9">
                            <div class="px-9 py-9 bg-gray-300  dark:bg-gray-700 "></div>
                            <div className='w-full'>
                                <div class="h-4 bg-gray-300 rounded-full dark:bg-gray-700 w-2/3 mb-2.5 "></div>
                                <div class="mt-5 flex flex-col md:flex-row items-center  md:gap-11 w-full">
                                    <div className='w-full'>
                                        <div class="w-full h-2.5 bg-gray-200 rounded-xl dark:bg-gray-700 mb-2.5"></div>
                                        <div class="w-full h-2.5 bg-gray-200 rounded-xl dark:bg-gray-700 mb-2.5"></div>
                                        <div class="w-full h-2.5 bg-gray-200 rounded-xl dark:bg-gray-700 mb-2.5"></div>
                                    </div>
                                    <div className='md:w-64 w-full'>
                                    <div class="w-44 h-11 bg-gray-200 rounded-xl dark:bg-gray-700 mb-2.5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default NoticeSkeleton;