
import React from 'react';
import { useForm } from 'react-hook-form';

const Payment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className='xl:px-52 py-10'>
            <div className='text-center'>
                <i className="text-3xl fa-solid fa-school"></i>
                <h3 className='font-bold text-3xl'>Admission Form</h3>
            </div>

            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="md:col-span-1">
                            <div class="px-4 sm:px-0">
                                <h3 class="text-lg font-medium leading-6 text-gray-900">Profile Info</h3>
                                <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                            </div>
                        </div>
                        <div class="mt-5 md:col-span-2 md:mt-0">
                            <div>
                                <div class="shadow sm:overflow-hidden sm:rounded-md">
                                    <div class="space-y-6 bg-white px-4 py-5 sm:p-6">

                                        <div>
                                            <label class="block text-sm font-medium text-gray-700">Photo</label>
                                            <div class="mt-1 flex items-center">
                                                <span class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                                    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                    </svg>
                                                </span>
                                                <button type="button" class="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Change</button>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-3 gap-6">
                                            <div class="col-span-3 sm:col-span-2">
                                                <label for="country" class="block text-sm font-medium text-gray-700">Blood Group</label>
                                                <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                                                {...register("bloodgroup")} 
                                                >
                                                    <option>Select Group</option>
                                                    <option value='O+'>O+ ive</option>
                                                    <option value='O-'>O- ive</option>
                                                    <option value='B+'>B+ ive</option>
                                                    <option value='AB+'>AB+ ive</option>
                                                    <option value='AB-'>AB- ive</option>
                                                </select>
                                            </div>

                                            <div class="col-span-6 sm:col-span-2">
                                                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                                                <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("email")} 
                                                />
                                            </div>
                                        </div>




                                        <div className='grid grid-cols-6 gap-6'>
                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="country" class="block text-sm font-medium text-gray-700"> Select your section</label>
                                                <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                {...register("studentgender")} 
                                                >
                                                    <option>Select</option>
                                                    <option value='Boys'>Boys Section</option>
                                                    <option value='Girls'>Girls Section</option>
                                                </select>
                                            </div>
                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="country" class="block text-sm font-medium text-gray-700">Class Name</label>
                                                <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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


                                        </div>
                                    </div>
                                    {/* <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                    <div class="py-5">
                        <div class="border-t border-gray-200"></div>
                    </div>
                </div>

                <div class="mt-10 sm:mt-0">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="md:col-span-1">
                            <div class="px-4 sm:px-0">
                                <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                                <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                            </div>
                        </div>
                        <div class="mt-5 md:col-span-2 md:mt-0">
                            <div>
                                <div class="overflow-hidden shadow sm:rounded-md">
                                    <div class="bg-white px-4 py-5 sm:p-6">
                                        <div class="grid grid-cols-6 gap-6">
                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("firstname")} 
                                                />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("lastname")} 
                                                />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="last-name" class="block text-sm font-medium text-gray-700">Father Name</label>
                                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("fathername")} 
                                                />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="last-name" class="block text-sm font-medium text-gray-700">Father NID/Passport Number</label>
                                                <input type="text" name="Father NID/Passport Number" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("fathernid")} 
                                                />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="last-name" class="block text-sm font-medium text-gray-700">Mother Name</label>
                                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("mothername")} 
                                                />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="last-name" class="block text-sm font-medium text-gray-700">Mother NID/Passport Number</label>
                                                <input type="text" name="Mother NID/Passport Number" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("mothernid")} 
                                                />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="last-name" class="block text-sm font-medium text-gray-700">If Father Died , Authority Name</label>
                                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("gurdianname")} 
                                                />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="country" class="block text-sm font-medium text-gray-700"> Relation with Gurdian</label>
                                                <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                {...register("gurdianwithrelation")} 
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


                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="last-name" class="block text-sm font-medium text-gray-700">Date of Birth</label>
                                                <input type="date" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("dob")} 
                                                />
                                            </div>


                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="last-name" class="block text-sm font-medium text-gray-700">Birth Certificate/ Passport</label>
                                                <input type="text" name="Father Name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("barthnumber")} 
                                                />
                                            </div>
                                            {/* grid grid-cols-6 gap-6 */}
                                        </div>
                                    </div>
                                    {/* <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                    <div class="py-5">
                        <div class="border-t border-gray-200"></div>
                    </div>
                </div>

                <div class="mt-10 sm:mt-0">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="md:col-span-1">
                            <div class="px-4 sm:px-0">
                                <h3 class="text-lg font-medium leading-6 text-gray-900">Present and Permanent Address</h3>
                                <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                            </div>
                        </div>
                        <div class="mt-5 md:col-span-2 md:mt-0">
                            <div>
                                <div class="overflow-hidden shadow sm:rounded-md">
                                    <div class="bg-white px-4 py-5 sm:p-6">
                                        <div class="grid grid-cols-6 gap-6">

                                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <label for="city" class="block text-sm font-medium text-gray-700">Division</label>
                                                <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("division")} 
                                                />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label for="region" class="block text-sm font-medium text-gray-700">District</label>
                                                <input type="text" name="region" id="region" autocomplete="address-level1" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("district")} 
                                                />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                                                <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("postcode")} 
                                                />
                                            </div>

                                            <div class="col-span-6">
                                                <label for="street-address" class="block text-sm font-medium text-gray-700">Present Address</label>
                                                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("presentaddress")} 
                                                />
                                            </div>

                                            <div class="col-span-6">
                                                <label for="street-address" class="block text-sm font-medium text-gray-700">Gurdian Present Address</label>
                                                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("gurdianaddress")} 
                                                />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="first-name" class="block text-sm font-medium text-gray-700">Father Mobile Number</label>
                                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("fathermobilenumber")} 
                                                />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="last-name" class="block text-sm font-medium text-gray-700">Mother Mobile Number</label>
                                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("mothermobilenumber")} 
                                                />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="first-name" class="block text-sm font-medium text-gray-700">Father/Mother Whatsapp Number</label>
                                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("fmwhatsapp")} />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="last-name" class="block text-sm font-medium text-gray-700">Gurdian Anual Sallery</label>
                                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                {...register("anualsallery")} 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="mt-10 sm:mt-10">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="md:col-span-1">
                            <div class="px-4 sm:px-0">
                                <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                                <p class="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
                            </div>
                        </div>
                        <div class="mt-5 md:col-span-2 md:mt-0">
                            <div>
                                <div class="overflow-hidden shadow sm:rounded-md">
                                    <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        <fieldset>
                                            <legend class="sr-only">By Email</legend>
                                            <div class="text-base font-medium text-gray-900" aria-hidden="true">By Email</div>
                                            <div class="mt-4 space-y-4">
                                                <div class="flex items-start">
                                                    <div class="flex h-5 items-center">
                                                        <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    </div>
                                                    <div class="ml-3 text-sm">
                                                        <label for="comments" class="font-medium text-gray-700">Comments</label>
                                                        <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                                    </div>
                                                </div>
                                                <div class="flex items-start">
                                                    <div class="flex h-5 items-center">
                                                        <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    </div>
                                                    <div class="ml-3 text-sm">
                                                        <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                                                        <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                                                    </div>
                                                </div>
                                                <div class="flex items-start">
                                                    <div class="flex h-5 items-center">
                                                        <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    </div>
                                                    <div class="ml-3 text-sm">
                                                        <label for="offers" class="font-medium text-gray-700">Offers</label>
                                                        <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset>
                                            <legend class="contents text-base font-medium text-gray-900">Push Notifications</legend>
                                            <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                            <div class="mt-4 space-y-4">
                                                <div class="flex items-center">
                                                    <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">Everything</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700">Same as email</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700">No push notifications</label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div class="bg-gray-50 px-7 py-3 text-right sm:px-6">
                                        <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-7 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Payment;