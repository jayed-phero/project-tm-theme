import React from 'react';
import { useForm } from 'react-hook-form';
import logotm from '../../../assets/logotm.png';

const AdmissionNewForm = () => {
    const { register, handlesubmit } = useForm()
    return (
        <div className='px-5 md:px-20 lg-px-32 xl:px-52 py-11 md:py-20'>
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
                    <div className='flex items-start flex-col justify-start md:flex-row gap-5'>
                        <div className='w-full'>
                            <div className='flex flex-col md:flex-row md:items-center'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700'>Student Name :</h3>
                                <input type="text" name="email-address" id="email-address" autocomplete="email" class=" block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("name")}
                                />
                            </div>
                            <div className='flex flex-col md:flex-row md:items-center mt-3'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700'>Email Address :</h3>
                                <input type="text" name="email-address" id="email-address" autocomplete="email" class=" block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("email")}
                                />
                            </div>
                            <div className='flex flex-col md:flex-row md:items-center mt-3'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700'>Password :</h3>
                                <input type="text" name="email-address" id="email-address" autocomplete="email" class=" block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("password")}
                                />
                            </div>
                            <div className='flex flex-col md:flex-row md:items-center mt-3'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700'>Blood Group :</h3>
                                <select id="country" name="country" autocomplete="country-name" class=" block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                            <div className=" flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-6 pb-7">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="text-sm text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload photo</span>
                                            <input
                                                id="file-upload" name="file-upload"
                                                type="file"
                                                className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center md:gap-11 mt-3 flex-col md:flex-row w-full'>
                        <div className='flex flex-col md:flex-row md:items-center w-full'>
                            <h3 className='md:w-44 block text-sm font-medium text-gray-700 mr-5'>Student Section :</h3>
                            <select id="country" name="country" autocomplete="country-name" class=" block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                {...register("studentGender")}
                            >
                                <option>Select</option>
                                <option value='Boys'>Boys Section</option>
                                <option value='Girls'>Girls Section</option>
                            </select>
                        </div>
                        <div className='mt-3 md:mt-0 flex flex-col md:flex-row md:items-center w-full'>
                            <h3 className='md:w-44 block text-sm font-medium text-gray-700'>Date of Birth :</h3>
                            <input type="date" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                {...register("dob")}
                            />
                        </div>
                    </div>
                    <div className='flex items-center md:gap-11 mt-3 flex-col md:flex-row w-full'>
                        <div className='flex flex-col md:flex-row md:items-center w-full'>
                            <h3 className='md:w-44 block text-sm font-medium text-gray-700 mr-5'>Admission Class :</h3>
                            <select id="country" name="country" autocomplete="country-name" class=" block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                {...register("class")}
                            >
                                <option>Select Class</option>
                                <option value='Hifz (1st)'>Hifz (1st)</option>
                                <option value='Nursary'>Nursary</option>
                                <option value='One'>One</option>
                                <option value='Two'>Two</option>
                                <option value='Three'>Three</option>
                                <option value='Four'>Four</option>
                                <option value='Five'>Five</option>
                                <option value='Six'>Six</option>
                                <option value='Seven'>Seven</option>
                                <option value='Eight'>Eight</option>
                            </select>
                        </div>
                        <div className='mt-3 md:mt-0 flex flex-col md:flex-row md:items-center w-full'>
                            <h3 className='md:w-44 block text-sm font-medium text-gray-700'>Birth Certificate Number :</h3>
                            <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                {...register("barthNumber")}
                            />
                        </div>
                    </div>
                    <div className='rounded-md border-2 border-dashed border-gray-300 w-full my-11 relative px-2 py-9'>
                        <div className='absolute -top-4 left-11 md:left-32 text-xl text-gray-700  bg-white px-2'>
                            <h1>Parents Info</h1>
                        </div>
                        <div className='flex items-center md:gap-11 mt-3 flex-col md:flex-row w-full'>
                            <div className='flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700 mr-2'>Father Name :</h3>
                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("fatherName")}
                                />
                            </div>
                            <div className='mt-3 md:mt-0 flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700'>Father NID/Passport:</h3>
                                <input type="text" name="Father NID/Passport Number" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("fatherNID")}
                                />
                            </div>
                        </div>
                        <div className='flex items-center md:gap-11 mt-3 flex-col md:flex-row w-full'>
                            <div className='flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700 mr-2'>Mother Name :</h3>
                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("motherName")}
                                />
                            </div>
                            <div className='mt-3 md:mt-0 flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700'>Mother NID/Passport:</h3>
                                <input type="text" name="Father NID/Passport Number" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("motherNID")}
                                />
                            </div>
                        </div>
                        <div className='flex items-center md:gap-11 mt-3 flex-col md:flex-row w-full'>
                            <div className='flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700 mr-2'>Father Phone :</h3>
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("fatherMobileNumber")}
                                />
                            </div>
                            <div className='mt-3 md:mt-0 flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700'>Mother Phone:</h3>
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("motherMobileNumber")}
                                />
                            </div>
                        </div>
                        <div className='flex items-center md:gap-11 mt-3 flex-col md:flex-row w-full'>
                            <div className='flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700 mr-2'>Father/Mother Whatsapp:</h3>
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("fmWhatsappNumber")} />
                            </div>
                            <div className='mt-3 md:mt-0 flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700'>Father Anual Salary:</h3>
                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("anualSalary")}
                                />
                            </div>
                        </div>
                        <div className='flex items-center md:gap-11 mt-3 flex-col md:flex-row w-full'>
                            <div className='flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700 mr-2'>Guardian Name:</h3>
                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("guardianName")}
                                />
                            </div>
                            <div className='mt-3 md:mt-0 flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700'>Relation With Guardian:</h3>
                                <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    {...register("guardianWithRelation")}
                                >
                                    <option>Select Relation</option>
                                    <option value='Brother'>Brother</option>
                                    <option value='Sister'>Sister</option>
                                    <option value='Grand Father'>Grand Father</option>
                                    <option value='Grand Mother'>Grand Mother</option>
                                    <option value='Uncle/Ant'>Uncle/ Ant</option>
                                    <option value='Others'>Others</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-md border-2 border-dashed border-gray-300 w-full my-11 relative px-2 py-9'>
                        <div className='absolute -top-4 left-11 md:left-32  text-xl text-gray-700  bg-white px-2'>
                            <h1>Present Address</h1>
                        </div>
                        <div className='flex items-center md:gap-11 mt-3 flex-col md:flex-row w-full'>
                            <div className='flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700 mr-5'>Divition:</h3>
                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("divition")}
                                />
                            </div>
                            <div className='mt-3 md:mt-0 flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700'>District :</h3>
                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("district")}
                                />
                            </div>
                        </div>
                        <div className='mt-3  flex flex-col md:flex-row md:items-center w-full'>
                            <h3 className='md:w-44 block text-sm font-medium text-gray-700 md:-mr-2'>Address :</h3>
                            <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                {...register("address")}
                            />
                        </div>
                    </div>
                    <div className='rounded-md border-2 border-dashed border-gray-300 w-full my-11 relative px-2 py-9'>
                        <div className='absolute -top-4 left-11 md:left-32  text-xl text-gray-700  bg-white px-2'>
                            <h1>Permenent Address</h1>
                        </div>
                        <div className='flex items-center md:gap-11 mt-3 flex-col md:flex-row w-full'>
                            <div className='flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700 mr-5'>Divition:</h3>
                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("divition")}
                                />
                            </div>
                            <div className='mt-3 md:mt-0 flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700'>District :</h3>
                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("district")}
                                />
                            </div>
                        </div>
                        <div className='mt-3  flex flex-col md:flex-row md:items-center w-full'>
                            <h3 className='md:w-44 block text-sm font-medium text-gray-700 md:-mr-2'>Address :</h3>
                            <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                {...register("address")}
                            />
                        </div>
                    </div>
                    <div className='rounded-md border-2 border-dashed border-gray-300 w-full my-11 relative px-2 py-9'>
                        <div className='absolute -top-4 left-11 md:left-32  text-xl text-gray-700  bg-white px-2'>
                            <h1>Previous Institution Info</h1>
                        </div>
                        <div className='flex items-center md:gap-11 mt-3 flex-col md:flex-row w-full'>
                            <div className='flex flex-1 flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700'>Institution Name:</h3>
                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("pre-institution-name")}
                                />
                            </div>
                            <div className='mt-3 w-full md:w-64 md:mt-0 flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700'>EIN Number :</h3>
                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("pre-ein-number")}
                                />
                            </div>
                        </div>
                        <div className='flex items-center md:gap-11 mt-3 flex-col md:flex-row w-full'>
                            <div className='flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700 mr-5'>Testimonials Date:</h3>
                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("testimonials-date")}
                                />
                            </div>
                            <div className='mt-3 w-full md:mt-0 flex flex-col md:flex-row md:items-center w-full'>
                                <h3 className='md:w-44 block text-sm font-medium text-gray-700'>Testimonials Number:</h3>
                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    {...register("testimonials-number")}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='mt-3  flex flex-col md:flex-row md:items-center w-full md:justify-start'>
                        <h3 className='flex-1 block text-xl font-medium text-gray-700 md:-mr-2'>Are you willing to be admitted to the hostel:</h3>
                        <select id="hostel" name="hostel" autocomplete="country-name" class="mt-1 block md:w-64 w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            {...register("hostel-admission")}
                        >
                            <option>Select Choice</option>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                    </div>
                    <div>

                    </div>
                    <div class="bg-gray-50 my-9 py-3 text-right">
                        <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-7 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionNewForm;

