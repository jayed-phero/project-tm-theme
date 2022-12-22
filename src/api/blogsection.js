import axios from "axios"

const getBlog = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/blogs`)
    .then(res => {
        
    })
}