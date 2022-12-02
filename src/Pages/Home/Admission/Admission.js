import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { postAndGetImageUrl } from '../../../api/GetImageUrl';
import { AuthContext } from '../../../Context/AuthProvider';
import AdmissionForm from './AdmissionForm';

const Admission = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, createUser } = useContext(AuthContext)
    // const onSubmit = data => {
    //     console.log(data)

    // }

    const [studentId, setStudentId] = useState(0)
    const getId = () => {
        let idd_ = 0;
        const sto = localStorage.getItem('studentId')
        if (sto) {
            idd_ = JSON.parse(sto)
            setStudentId(idd_)
        }
    }

    // useEffect(() => {
    //     const idd = 0;
    //     const sto = localStorage.getItem('studentId')
    //     if (sto) {
    //         idd = JSON.parse(sto)
    //         setStudentId(idd)
    //     }
    // }, [studentId])
    // // getId()

    const handleID = () => {
        let stId = 101;
        const getStoredId = localStorage.getItem('studentId')
        if (getStoredId) {
            stId = JSON.parse(getStoredId)
        }
        const quanti = stId
        if (quanti) {
            const newQuan = quanti + 1;
            stId = newQuan;
        }
        else {
            stId = 1;
        }
        localStorage.setItem('studentId', JSON.stringify(stId))
    }

    const onSubmit = (event) => {

        const anualSallery = event.anualSallery;
        const barthNumber = event.barthNumber;
        const bloodGroup = event.bloodGroup;
        const className = event.class;
        const formatDistanceStrict = event.formatDistanceStrict;
        const division = event.division;
        const dob = event.dob;
        const email = event.email;
        const password = event.password;
        const fatherMobileNumber = event.fatherMobileNumber;
        const fatherNID = event.fatherNID;
        const name = `${event.firstName} ${event.lastName}`;
        // const name = `${form.firstname.value} ${form.lastname.value}`;
        const firstName = event.firstName;
        const fmWhatsappNumber = event.fmWhatsappNumber;
        const gurdianAddress = event.gurdianAddress;
        const gurdianName = event.gurdianName;
        const gurdianWithRelation = event.gurdianWithRelation;
        const lastName = event.lastName;
        const motherMobileNumber = event.motherMobileNumber;
        const motherNID = event.motherNID;
        const motherName = event.motherName;
        const postCode = event.postCode;
        const presentAddress = event.presentAddress;
        const studentGender = event.studentGender;
        const image = event.image[0]



        postAndGetImageUrl(image)
            .then(imgData => {
                console.log(imgData)
                createUser(email, password)
                    .then(result => {
                        const user = result.user
                        console.log(user)
                        const studentInfo = {
                            anualSallery,
                            barthNumber,
                            bloodGroup,
                            className,
                            formatDistanceStrict,
                            division,
                            dob,
                            email,
                            password,
                            fatherMobileNumber,
                            fatherNID,
                            name,
                            fmWhatsappNumber,
                            gurdianAddress,
                            gurdianName,
                            gurdianWithRelation,
                            motherMobileNumber,
                            motherNID,
                            motherName,
                            postCode,
                            presentAddress,
                            studentGender,
                            imgData,

                        }
                        handleID()
                        getId()

                        const studentInfoWithId = {
                            studentInfo,
                            studentId
                        }
                        console.log(studentInfoWithId)

                        fetch('http://localhost:8000/studentsfullinfo', {
                            method: 'POST',
                            headers: {
                                'content-type' : 'application/json'
                            },
                            body: JSON.stringify(studentInfoWithId)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.acknowledged) {
                                    toast.success('Admission form submitted successfully.')
                                }
                            })
                            .catch(err => console.error(err))



                    })

            })

        // const studentInfo = {
        //     section,
        //     name,
        //     email,
        //     // phone,
        //     dob,
        //     address,
        //     pclass,
        //     message
        // }

        // handleID()
        // getId()

        // console.log(studentInfo)

        // const studentInfoWithId = {
        //     studentInfo,
        //     studentId
        // }




        // fetch('http://localhost:5000/studentsfullinfo', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(studentInfoWithId)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.acknowledged) {
        //             toast.success('Admission form submitted successfully.')
        //         }
        //     })
        //     .catch(err => console.error(err))
    }
    return (
        // <div className='md:px-52 py-20'>
        //     <div className='text-center'>
        //         <i className="text-3xl fa-solid fa-school"></i>
        //         <h3 className='font-bold text-3xl'>Admission Form</h3>
        //     </div>
        //     <div>
        //         <form onSubmit={handleSubmit} className=''>
        //             <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-20'>
        //                 <div className='w-full '>
        //                     <div className='flex items-center justify-between my-4'>
        //                         <p>Class</p>
        //                         <input type="number" name='class' placeholder="" className="input input-bordered w-full max-w-xs" required />
        //                     </div>
        //                     <div className='flex items-center justify-between my-4'>
        //                         <p>First Name</p>
        //                         <input type="text" name='firstname' placeholder="" className="input input-bordered w-full max-w-xs" required />
        //                     </div>
        //                     <div className='flex items-center justify-between my-4'>
        //                         <p>Last Name</p>
        //                         <input type="text" name='lastname' placeholder="" className="input input-bordered w-full max-w-xs" required />
        //                     </div>
        //                     <div className='flex items-center justify-between my-4'>
        //                         <p>Email Address</p>
        //                         <input type="email" name='email' placeholder="" className="input input-bordered w-full max-w-xs" required />
        //                     </div>
        //                     <div className='flex items-center justify-between my-4'>
        //                         <p>Phone</p>
        //                         <input type="text" name='phone' placeholder="" className="input input-bordered w-full max-w-xs" required />
        //                     </div>
        //                     <div className='flex items-center justify-between my-4'>
        //                         <p>Date of Birth</p>
        //                         <input type="date" name='dob' placeholder="dd/mm/yyyy" className="input input-bordered w-full max-w-xs" required />
        //                     </div>
        //                 </div>
        //                 <div className='w-full '>
        //                     <div className='flex items-center justify-between my-4'>
        //                         <p>Address</p>
        //                         <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" required />
        //                     </div>
        //                     <div className='flex items-center justify-between my-4'>
        //                         <p></p>
        //                         <input type="text" name='state' placeholder="State" className="input input-bordered w-full max-w-xs" required />
        //                     </div>
        //                     <div className='flex items-center justify-between my-4'>
        //                         <p>Previous Class</p>
        //                         <input type="text" name='pclass' placeholder="Previous Class" className="input input-bordered w-full max-w-xs" required />
        //                     </div>
        //                     <div className='flex items-center justify-between my-4'>
        //                         <p>Message</p>
        //                         <textarea type='message' name='message' className="textarea h-44 textarea-bordered max-w-xs w-full" placeholder="Bio"></textarea>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className='text-center mt-9'>
        //                 <button type='submit' className='border-yellow-700 border-4 px-9 py-3 uppercase text-yellow-700 hover:bg-yellow-700 hover:text-white duration-300 ease-in'>Submit Now</button>
        //             </div>
        //         </form>
        //     </div>
        // </div>
        <div>
            <AdmissionForm onSubmit={onSubmit} handleSubmit={handleSubmit} register={register} />
        </div>
    );
};

export default Admission;