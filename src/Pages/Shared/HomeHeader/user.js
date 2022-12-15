export const getUserRole = async email => {
    const url = `${process.env.REACT_APP_API_URL}/usersall/${email}`
    
    const res = await fetch(url)
    const user = await res.json()
    return user?.role
}