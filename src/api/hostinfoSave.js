import axios from "axios";

export const authTkenAndSaveHostData =  (hostData) => {
    const currentUser = {
        email: hostData.email ,
        name: hostData.name ,
        image: hostData.imgLink,
        designation: hostData.designation,
        role: hostData.role 
    }

    axios.put(`${process.env.REACT_APP_API_URL}/tmuser/${hostData?.email}`, currentUser)
    .then(res => {
        console.log(res)
        const accessToken = res?.data?.data
        localStorage.setItem("accessToken", accessToken);
    })
}