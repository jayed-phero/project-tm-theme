import { useEffect, useState } from "react"

const useVerify = email => {
    const [isVerify, setIsVerify] = useState(false)
    useEffect(() => {
        if(email){
            fetch(`${process.env.REACT_APP_API_URL}/users/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsVerify(data.isVerify)
            })
        }
    }, [email])
    return [isVerify]
}
export default useVerify