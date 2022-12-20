import React from 'react';
import { useForm } from 'react-hook-form';
import logotm from '../../../assets/logotm.png';

const AdmissionNewForm = () => {
    const { register, handlesubmit } = useForm()
    return (
        <div className='px-5 md:px-20 lg-px-32 xl:px-52 py-11 md: py-20'>
            <div className='flex items-center flex-col md:flex-row gap-11 mx-auto md:w-[55rem]'>
                <img src={logotm}
                    className='h-40 w-40 rounded-full'
                    alt="" />
                <div className='text-center md:text-start'>
                    <h3 className='md:text-5xl text-3xl font-bold uppercase pb-3'>University of <span className="text-regal-orange">
                        TMKMT
                    </span></h3>
                    <p className='md:w-2/3 w-full'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>
                    <div className='flex flex-col md:flex-row gap-5 pt-3'>
                        <h3>
                            <i class="text-regal-orange pr-2 fa-solid fa-location-dot"></i>
                            Dhaka, Bangladesh
                        </h3>
                        <h3>
                            <i class="text-regal-orange pr-2  fa-solid fa-phone"></i>
                            +8801234567
                        </h3>
                        <h3>
                            <i class="text-regal-orange pr-2  fa-regular fa-envelope"></i>
                            support.tmedu@gmail.com
                        </h3>
                    </div>
                </div>
            </div>
            <div className='text-center my-9'>
                <h3 className='font-bold text-xl md:text-3xl'>
                    <i className="fa-solid fa-school pr-3 text-regal-orange"></i>
                    Admission Form
                </h3>
            </div>
            <div>
                <form action="">
                    <div>
                        <div>
                            <div className='flex flex-col md:flex-row items-center'>
                                <h3 className='md:w-44'>Student Name :</h3>
                                <input type="text" name="name" id="name" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("name")}
                                />
                            </div>
                            <div className='flex flex-col md:flex-row items-center'>
                                <h3 className='md:w-44'>Email Address :</h3>
                                <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("email")}
                                />
                            </div>
                            <div className='flex flex-col md:flex-row items-center'>
                                <h3 className='md:w-44'>Password :</h3>
                                <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("password")}
                                />
                            </div>
                            <div className='flex flex-col md:flex-row items-center'>
                                <h3 className='md:w-44'>Blood Group :</h3>
                                <select id="country" name="country" autocomplete="country-name" class="mt-3 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    {...register("bloodGroup")}
                                >
                                    <option>Select Group</option>
                                    <option value='O+'>O+ ive</option>
                                    <option value='O-'>O- ive</option>
                                    <option value='B+'>B+ ive</option>
                                    <option value='AB+'>AB+ ive</option>
                                    <option value='AB-'>AB- ive</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    {/* <div className='flex space-x-4 items-center'>
                        <label
                            htmlFor='image'
                            className='p-3 text-center rounded-md cursor-pointer text-gray-500 font-bold border  border-green-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:border-white hover:text-white'
                        >
                            <input
                                type='file'
                                {...("image")}
                                name='image'
                                id='image'
                                accept='image/*'
                                hidden
                            />
                        </label>
                    </div> */}
                </form>
            </div>
        </div>
    );
};

export default AdmissionNewForm;