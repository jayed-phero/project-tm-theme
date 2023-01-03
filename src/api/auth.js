import axios from "axios"
import { useState } from "react"

export const setAuthTokenForStudent = userData => {
    const currentUser = {
        studentId: userData?.studentId,
        name: userData?.name,
        imgLink: userData?.imgLink,
        studentGender: userData?.studentGender,
        barthCertificateNumber: userData?.barthCertificateNumber,
        bloodGroup: userData?.bloodGroup,
        className: userData?.className,
        dob: userData?.dob,
        email: userData?.email,
        password: userData?.password,
        fatherMobileNumber: userData?.fatherMobileNumber,
        fmWhatsappNumber: userData?.fmWhatsappNumber,
        fatherNID: userData?.fatherNID,
        motherMobileNumber: userData?.motherMobileNumber,
        motherName: userData?.motherName,
        motherNID: userData?.motherNID,
        postCode: userData?.postCode,
        gurdianName: userData?.gurdianName,
        gurdianAddress: userData?.gurdianAddress,
        gurdianWithRelation: userData?.gurdianWithRelation,
        presentAddress: userData?.presentAddress,
        permenentAddress: userData?.permenentAddress,
        preInstitutionInfo: userData?.preInstitutionInfo,
        fatherAnualSalary: userData?.fatherAnualSalary,
        admittedInHostel: userData?.admittedInHostel,
        role: userData?.role
    }

    //   Save user in db & get token
    axios.put(`${process.env.REACT_APP_API_URL}/tmuser/${userData?.email}`, currentUser)
        .then(res => {
            console.log(res)
            const accessToken = res?.data?.data
            localStorage.setItem("accessToken", accessToken);
        })
}

export const setAuthTokenForStudentInSignIn = userData => {
    // const [signInData, setSignInData] = useState(null)
    const currentUser = {
        email: userData.email
    }

    //   Save user in db & get token
    axios.put(`${process.env.REACT_APP_API_URL}/hostlogin/${userData?.email}`, currentUser)
        .then(res => {
            console.log(res)
            // setSignInData(res.data)
            const accessToken = res?.data?.data
            localStorage.setItem("accessToken", accessToken);
        })
        .catch(err =>{
            console.log(err)
        })

        // return signInData;
}