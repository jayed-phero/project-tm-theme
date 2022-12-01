import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from '@heroicons/react/20/solid'

const AddEventForm = ({
    register,
    handleSubmit,
    handleAddEvent,
    startingDate,
    finishingDate,
    setStartingDate,
    setFinishingDate
}) => {
    return (
        <div>
            <div className='flex justify-center mt-6'>
                <div className='w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50'>
                    <form
                        onSubmit={handleSubmit(handleAddEvent)}
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='location' className='block text-gray-600'>
                                Title
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                name='title'
                                {...register("title")}
                                id='location'
                                type='text'
                                placeholder='Title'
                                required
                            />
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description'
                                {...register("description")}
                                className='block rounded-md focus:green-300 w-full h-20 px-4 py-3 text-gray-800 bg-green-50 border border-green-300 focus:outline-green-500 '
                                name='description'
                            ></textarea>
                        </div>

                        <div className='flex justify-between '>
                            <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
                                <div>
                                    <p className='block text-sm text-gray-500'>From</p>
                                    <DatePicker
                                        // dateFormat="dd"
                                        selected={startingDate}
                                        onChange={data => setStartingDate(data)}
                                        className='w-2/3'
                                    />
                                </div>

                                <CalendarIcon className='h5 w-5' />
                            </div>
                            <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
                                <div>
                                    <p className='block text-sm text-gray-500'>To</p>
                                    <DatePicker
                                        selected={finishingDate}
                                        onChange={data => setFinishingDate(data)}
                                        className='w-2/3'
                                    />
                                </div>

                                <CalendarIcon className='h5 w-5' />
                            </div>
                        </div>

                        <div className='flex justify-between gap-2'>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='bedrooms' className='block text-gray-600'>
                                    Address
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='address'
                                    id='content-3'
                                    {...register("address")}
                                    type='text'
                                    placeholder='Content 3'
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='bathrooms' className='block text-gray-600'>
                                    Registration Fee
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='bathrooms'
                                    {...register("price")}
                                    id='fee'
                                    type='number'
                                    placeholder=' Registration Fee'
                                    required
                                />
                            </div>
                        </div>


                        <div className='flex space-x-4 items-center'>
                            <label
                                htmlFor='image'
                                className='p-3 text-center rounded-md cursor-pointer text-gray-500 font-bold border  border-green-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:border-white hover:text-white'
                            >
                                <input
                                    type='file'
                                    {...register("image")}
                                    name='image'
                                    id='image'
                                    accept='image/*'
                                    hidden
                                />
                            </label>
                        </div>

                        <div className=''>
                            <label htmlFor='rules' className='block text-gray-600 space-y-1 my-2'>
                                Event Rules One by One
                            </label>
                            <div className='space-y-1 text-sm m-y-2'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Content 1
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='price'
                                    {...register("content1")}
                                    id='content1'
                                    type='text'
                                    placeholder='Content 1'
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm my-2'>
                                <label htmlFor='guest' className='block text-gray-600'>
                                    Content 2
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='content2'
                                    id='content2'
                                    type='text'
                                    {...register("content2")}
                                    placeholder='Content 2'
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm my-2'>
                                <label htmlFor='bedrooms' className='block text-gray-600'>
                                    Content 3
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='content3'
                                    id='content-3'
                                    {...register("content3")}
                                    type='text'
                                    placeholder='Content 3'
                                    required
                                />
                            </div>


                            <div className='space-y-1 text-sm my-2'>
                                <label htmlFor='title' className='block text-gray-600'>
                                    Content 4
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='title'
                                    {...register("content4")}
                                    id='title'
                                    type='text'
                                    placeholder='Content 4'
                                    required
                                />
                            </div>


                            <div className='space-y-1 text-sm my-2'>
                                <label htmlFor='title' className='block text-gray-600'>
                                    Content 5
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                    name='title'
                                    {...register("content5")}
                                    id='title'
                                    type='text'
                                    placeholder='Content 5'
                                    required
                                />
                            </div>
                        </div>



                        <button
                            type='submit'
                            className='block w-full p-3 text-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-emerald-500 to-lime-500 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none'
                        >
                            Save & Continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEventForm;