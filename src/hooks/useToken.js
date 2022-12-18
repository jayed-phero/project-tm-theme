import axios from "axios";
import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('')
    // console.log('roe generate token', user)
    useEffect(() => {
        const email = user?.email
        const uid = user?.uid 
        const currentUser = {
            email: email ,
            uid: uid
        }
        if(email && uid ){
            axios.put(`${process.env.REACT_APP_API_URL}/tmuser/${email}`, currentUser)
            .then(res => {
                // console.log(res)
                const accessToken = res?.data?.data
                setToken(accessToken)
                localStorage.setItem("accessToken", accessToken);
            })
        }
    }, [user])
    return [token]

}

export default useToken;