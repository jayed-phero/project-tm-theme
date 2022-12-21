import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PaymentDetails = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [userFullData, setUserFullData] = useState({})
    const { user } = useContext(AuthContext)
    const paymentData = useLoaderData()
    const { image, title, description, start, to, content, address, price, _id } = paymentData;


    useEffect(() => {
        getUserData()
    }, [user?.email])

    const getUserData = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/tmuserfulldata/${user?.email}`)
            .then(data => {
                console.log(data)
                setUserFullData(data.data)
            })
            .catch(err => console.log(err))
    }


    const onSubmit = (e) => {
        const email = user?.email
        const name = user?.displayName
        const className = userFullData?.className
        const section = userFullData?.section
        const currency = e.currency
        const eventFee = price
        const phone = e.phone

        const paymentsInfo = {
            email: user?.email,
            eventData: _id,
            eventTitle: title,
            eventImg: image,
            name,
            className,
            section,
            currency,
            eventFee,
            phone
        }

        console.log(paymentsInfo)

        axios.post(`${process.env.REACT_APP_API_URL}/eventpayment`, paymentsInfo )
            .then(data => {
                console.log(data)
                window.location.replace(data.data.url)
            })
            .catch(err => console.log(err))

    }
    return (
        <div className='xl:px-52 px-5 md:px-20 lg:px-32 py-9 md:py-16'>
            <div className='flex flex-col lg:flex-row items-start gap-11 relative lg:pt-11'>
                <div className='flex-1'>
                    <div className='text-xl lg:text-2xl font-semibold pb-7'>
                        <h1>{title}</h1>
                    </div>
                    <img src={image} alt=""
                        className='w-full h-56 md:h-96'
                    />
                </div>
                <div className='w-full md:w-96'>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='text-xl font-semibold pb-5'>Payment Info</h3>
                        <div class="col-span-6 sm:col-span-2 mb-3">
                            <label for="email-address" class="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                disabled
                                defaultValue={user?.displayName}
                                {...register("name")}
                            />
                        </div>
                        <div class="col-span-6 sm:col-span-2 mb-3">
                            <label for="email-address" class="block text-sm font-medium text-gray-700">Email</label>
                            <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                disabled
                                defaultValue={user?.email}
                                {...register("email")}
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <div class="col-span-6 sm:col-span-2 mb-3">
                                <label for="email-address" class="block text-sm font-medium text-gray-700">Class</label>
                                <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    disabled
                                    defaultValue={userFullData.className}
                                    {...register("class")}
                                />
                            </div>
                            <div class="col-span-6 sm:col-span-2 mb-3">
                                <label for="email-address" class="block text-sm font-medium text-gray-700">Section</label>
                                <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    disabled
                                    defaultValue={userFullData.studentGender
                                    }
                                    {...register("section")}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div class="w-full mb-3">
                                <label for="country" class="block text-sm font-medium text-gray-700">Currency</label>
                                <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    {...register("currency")}
                                >
                                    <option selected value='BDT'>BDT</option>
                                    <option value='USD'>USD</option>
                                    <option value='RUPI'>RUPI</option>
                                </select>
                            </div>
                            <div class="w-full mb-3">
                                <label for="email-address" class="block text-sm font-medium text-gray-700">Event Fee</label>
                                <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    disabled
                                    defaultValue={price}
                                    {...register("eventFee")}
                                />
                            </div>
                        </div>
                        <div class="col-span-6 sm:col-span-2 mb-3">
                            <label for="email-address" class="block text-sm font-medium text-gray-700">Mobile Number</label>
                            <input type="text" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                {...register("phone")}
                            />
                        </div>
                        <div class="bg-gray-50  py-5 ">
                            <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 w-full  text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Pay</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentDetails;