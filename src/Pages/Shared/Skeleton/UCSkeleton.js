import React from 'react';

const UCSkeleton = () => {
    return (
        <div>
            <div role="status" class="animate-pulse ">
                <div className="flex items-start gap-7 mb-7">
                    <div class="px-9 py-9 bg-gray-300  dark:bg-gray-700 "></div>
                    <div className='w-full'>
                        <div class="h-4 bg-gray-300 rounded-full dark:bg-gray-700 w-full mb-2.5 "></div>
                        <div class="h-4  bg-gray-300 rounded-full dark:bg-gray-700 w-1/2"></div>
                        <div class="mt-5">
                            <div class="w-40 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-3 mb-2.5"></div>
                            <div class="w-40 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-7 mb-9">
                    <div class="px-9 py-9 bg-gray-300  dark:bg-gray-700 "></div>
                    <div className='w-full'>
                        <div class="h-4 bg-gray-300 rounded-full dark:bg-gray-700 w-full mb-2.5 "></div>
                        <div class="h-4  bg-gray-300 rounded-full dark:bg-gray-700 w-1/2"></div>
                        <div class="mt-5">
                            <div class="w-40 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-3 mb-2.5"></div>
                            <div class="w-40 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-7 mb-9">
                    <div class="px-9 py-9 bg-gray-300  dark:bg-gray-700 "></div>
                    <div className='w-full'>
                        <div class="h-4 bg-gray-300 rounded-full dark:bg-gray-700 w-full mb-2.5 "></div>
                        <div class="h-4  bg-gray-300 rounded-full dark:bg-gray-700 w-1/2"></div>
                        <div class="mt-5">
                            <div class="w-40 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-3 mb-2.5"></div>
                            <div class="w-40 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                    </div>
                </div>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default UCSkeleton;