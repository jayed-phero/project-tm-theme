import axios from "axios";

export const authTkenAndSaveHostData =  (hostData) => {
    const currentUser = {
        email: hostData.email ,
        name: hostData.name ,
        image: hostData.imgLink,
        designation: hostData.designation,
        verify: "unverified",
        role: "employee"
    }

    axios.put(`${process.env.REACT_APP_API_URL}/host/${hostData.email}`, currentUser)
    .then(data => {
        console.log(data)
        localStorage.setItem('tmtToken', data.token)
    } )
}