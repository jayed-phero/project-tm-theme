import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { setAuthTokenForStudent } from '../../../api/auth';
import { postAndGetImageUrl } from '../../../api/GetImageUrl';
import { AuthContext } from '../../../Context/AuthProvider';
// import useToken from '../../../hooks/useToken';
import AdmissionForm from './AdmissionForm';

const Admission = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, createUser, updateUserProfile } = useContext(AuthContext)
    // const onSubmit = data => {
    //     console.log(data)

    // }
    // const [token] = useToken(user)
    // console.log('token from db', token)

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

        const fatherAnualSallery = event.anualSallery;
        const barthCertificateNumber = event.barthNumber;
        const bloodGroup = event.bloodGroup;
        const className = event.class;
        const division = event.division;
        const district = event.district;
        const dob = event.dob;
        const email = event.email;
        const password = event.password;
        const fatherMobileNumber = event.fatherMobileNumber;
        const fatherNID = event.fatherNID;
        const name = `${event.firstName} ${event.lastName}`;
        const fmWhatsappNumber = event.fmWhatsappNumber;
        const gurdianAddress = event.gurdianAddress;
        const gurdianName = event.gurdianName;
        const gurdianWithRelation = event.gurdianWithRelation;
        const motherMobileNumber = event.motherMobileNumber;
        const motherNID = event.motherNID;
        const motherName = event.motherName;
        const postCode = event.postCode;
        const presentAddress = event.presentAddress;
        const studentGender = event.studentGender;
        const image = event.image[0]
        // const [token] = useToken()



        postAndGetImageUrl(image)
            .then(imgLink => {
                console.log(imgLink)
                createUser(email, password)
                    .then(result => {
                        const user = result.user
                        console.log(user)
                        updateUserProfile(name, imgLink)
                        const studentInfo = {
                            studentId,
                            name,
                            imgLink,
                            studentGender,
                            barthCertificateNumber,
                            bloodGroup,
                            className,
                            dob,
                            email,
                            password,
                            fatherMobileNumber,
                            fmWhatsappNumber,
                            fatherNID,
                            motherMobileNumber,
                            motherName,
                            motherNID,
                            postCode,
                            gurdianName,
                            gurdianAddress,
                            gurdianWithRelation,
                            presentAddress,
                            district,
                            division,
                            fatherAnualSallery,
                            role: "student"
                        }
                       setAuthTokenForStudent(studentInfo)
                    })

            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <AdmissionForm onSubmit={onSubmit} handleSubmit={handleSubmit} register={register} />
        </div>
    );
};

export default Admission;