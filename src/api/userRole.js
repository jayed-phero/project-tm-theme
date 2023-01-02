export const getUserRole = async userRole => {
    const url = `${process.env.REACT_APP_API_URL}/hostrole/${userRole?.email}`
    
    const res = await fetch(url)
    const user = await res.json()
    return user?.role
}