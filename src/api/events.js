// Get all booking gor Admin

export const getAllEvents = async () => {
    const url = `${process.env.REACT_APP_API_URL}/events`;
    const response = await fetch(url)
    const data = await response.json()

    return data
}