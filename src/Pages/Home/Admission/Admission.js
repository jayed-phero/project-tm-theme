import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Admission = () => {
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
        let stId = 0;
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

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const section = form.class.value;
        const name = `${form.firstname.value} ${form.lastname.value}`;
        const email = form.email.value;
        const phone = form.phone.value;
        const dob = form.dob.value;
        const address = `${form.address.value}, ${form.state.value}`;
        const pclass = form.pclass.value;
        const message = form.message.value;

        const studentInfo = {
            section,
            name,
            email,
            phone,
            dob,
            address,
            pclass,
            message
        }

         handleID()
         getId()

        console.log(studentInfo)

        const studentInfoWithId = {
            studentInfo,
            studentId
        }




        fetch('http://localhost:5000/studentsfullinfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
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
    }
    return (
        <div className='md:px-52 py-20'>
            <div className='text-center'>
                <i className="text-3xl fa-solid fa-school"></i>
                <h3 className='font-bold text-3xl'>Admission Form</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit} className=''>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-20'>
                        <div className='w-full '>
                            <div className='flex items-center justify-between my-4'>
                                <p>Class</p>
                                <input type="number" name='class' placeholder="" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className='flex items-center justify-between my-4'>
                                <p>First Name</p>
                                <input type="text" name='firstname' placeholder="" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className='flex items-center justify-between my-4'>
                                <p>Last Name</p>
                                <input type="text" name='lastname' placeholder="" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className='flex items-center justify-between my-4'>
                                <p>Email Address</p>
                                <input type="email" name='email' placeholder="" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className='flex items-center justify-between my-4'>
                                <p>Phone</p>
                                <input type="text" name='phone' placeholder="" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className='flex items-center justify-between my-4'>
                                <p>Date of Birth</p>
                                <input type="date" name='dob' placeholder="dd/mm/yyyy" className="input input-bordered w-full max-w-xs" required />
                            </div>
                        </div>
                        <div className='w-full '>
                            <div className='flex items-center justify-between my-4'>
                                <p>Address</p>
                                <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className='flex items-center justify-between my-4'>
                                <p></p>
                                <input type="text" name='state' placeholder="State" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className='flex items-center justify-between my-4'>
                                <p>Previous Class</p>
                                <input type="text" name='pclass' placeholder="Previous Class" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className='flex items-center justify-between my-4'>
                                <p>Message</p>
                                <textarea type='message' name='message' className="textarea h-44 textarea-bordered max-w-xs w-full" placeholder="Bio"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-9'>
                        <button type='submit' className='border-yellow-700 border-4 px-9 py-3 uppercase text-yellow-700 hover:bg-yellow-700 hover:text-white duration-300 ease-in'>Submit Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Admission;