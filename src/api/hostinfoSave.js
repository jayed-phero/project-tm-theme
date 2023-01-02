import axios from "axios";

export const authTkenAndSaveHostData =  (hostData) => {
    const currentUser = {
        email: hostData.email,
        name: hostData.name ,
        image: hostData.image,
        hostId: hostData.hostId,
    }

    axios.put(`${process.env.REACT_APP_API_URL}/hostsignup/${hostData?.hostId}`, currentUser)
    .then(res => {
        console.log(res)
        const accessToken = res?.data?.data
        localStorage.setItem("accessToken", accessToken);
    })
    .catch(err => {
        console.log(err)
    })
}