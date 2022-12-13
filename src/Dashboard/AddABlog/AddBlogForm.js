import React from 'react';
import ScrollToTop from '../../hooks/Scrool-to-top';

const AddBlogForm = ({ register,
    handleSubmit,
    handleAddBlog, loading }) => {
    return (
        <div>
            <ScrollToTop/>
            <div className='flex justify-center'>
                <div className='w-full max-w-lg lg:p-8  space-y-3 text-gray-800 rounded-xl bg-gray-50'>
                    <form
                        onSubmit={handleSubmit(handleAddBlog)}
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
                                required
                            ></textarea>
                        </div>

                        {/* <div className='flex justify-between '>
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
                        </div> */}

                        {/* <div className='flex justify-between gap-2'>

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
                        </div> */}

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='' className='block text-gray-600'>
                                Blog Coute
                            </label>

                            <textarea
                                id='blogcoute'
                                {...register("blogcoute")}
                                className='block rounded-md focus:green-300 w-full h-20 px-4 py-3 text-gray-800 bg-green-50 border border-green-300 focus:outline-green-500 '
                                name='blogcoute'
                                required
                            ></textarea>
                        </div>


                        <div className='flex'>
                            <label
                                htmlFor='image'
                                className='p-3 text-center rounded-md cursor-pointer text-gray-500 font-bold border  border-green-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:border-white hover:text-white w-full'
                            >
                                <input
                                    type='file'
                                    {...register("image")}
                                    name='image'
                                    id='image'
                                    required
                                />
                            </label>
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='' className='block text-gray-600'>
                                Category
                            </label>

                            <select
                                id='category'
                                {...register("category")}
                                className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                                name='category'
                                required
                            >
                                <option>Select</option>
                                <option value="education">Education</option>
                                <option value="islamic">Islamic</option>
                                <option value="recent">Recent</option>
                            </select>
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='' className='block text-gray-600'>
                                Middle Description
                            </label>

                            <textarea
                                id=''
                                {...register("middledesc")}
                                className='block rounded-md focus:green-300 w-full h-20 px-4 py-3 text-gray-800 bg-green-50 border border-green-300 focus:outline-green-500 '
                                name='middledesc'
                                required
                            ></textarea>
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='' className='block text-gray-600'>
                                Finising Speech
                            </label>

                            <textarea
                                id='lastspeech'
                                {...register("lastspeech")}
                                className='block rounded-md focus:green-300 w-full h-20 px-4 py-3 text-gray-800 bg-green-50 border border-green-300 focus:outline-green-500 '
                                name='lastspeech'
                                required
                            ></textarea>
                        </div>


                        <button
                            type='submit'
                            className='block w-full p-3 text-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-emerald-500 to-lime-500 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none'
                        >
                            Save & Upload
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlogForm;