import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { postAndGetImageUrl } from '../../api/GetImageUrl';
import { AuthContext } from '../../Context/AuthProvider';
import ScrollToTop from '../../hooks/Scrool-to-top';
import AddBlogForm from './AddBlogForm';

const AddABlog = () => {
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const handleAddBlog = data => {
        console.log(data)
        const title = data.title;
        const image = data.image[0]
        const description = data.description
        const blogcoute = data.blogcoute
        const middledesc = data.middledesc
        const lastspeech = data.lastspeech
        const categoryName = data.category

        postAndGetImageUrl(image)
            .then(imgLink => {
                // console.log(imgLink)
                const blogData = {
                    title,
                    banner: imgLink,
                    description,
                    blogcoute,
                    middledesc,
                    lastspeech,
                    categoryName,
                    image: user?.photoURL,
                    name: user?.displayName,
                    email: user?.email

                }
                console.log(blogData)
                setLoading(true)
                axios.post(`${process.env.REACT_APP_API_URL}/blogs`, blogData)
                    .then(postData => {
                        console.log(postData)
                        // data.reset()
                        toast.success("Blog posted Successfully")
                        setLoading(false)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <ScrollToTop/>
            <section class="bg-white dark:bg-gray-900">
                <div class="container flex flex-col px-6 py-10 mx-auto lg:flex-row lg:items-start gap-11">
                    <div class="w-full lg:w-1/2 lg:sticky top-11">
                        <div class="lg:max-w-lg">
                            <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                                Write up comming events tittle and others relevent information.
                            </h1>

                            <div class="mt-8 space-y-5">
                                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">All field are important</span>
                                </p>

                                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">Must be upload a cover photo of event</span>
                                </p>

                                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">Check your word abribiation carefully</span>
                                </p>
                            </div>
                        </div>

                        <div class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                            <form class="flex flex-col lg:flex-row">
                                <input type="email" placeholder="Enter your email address" class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                                <button type="button" class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400" disabled>
                                    Join Us
                                </button>
                            </form>
                        </div>
                    </div>

                    <div class="w-full">
                        <AddBlogForm
                            loading={loading}
                            register={register}
                            handleSubmit={handleSubmit}
                            handleAddBlog={handleAddBlog}
                        />
                    </div>
                </div>
            </section >
        </div>
    );
};

export default AddABlog;