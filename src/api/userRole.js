export const getUserRole = async userData => {
    const url = `${process.env.REACT_APP_API_URL}/usersall/${userData?.email}`
    
    const res = await fetch(url)
    const user = await res.json()
    return user?.role
}