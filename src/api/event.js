export const updateEventInfo = async event => {
    delete event._id
    const res = await fetch(`${process.env.REACT_APP_API_LIN}/allproducts/${event.role}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({ ...event, role: 'advertised'}),
    })
    const data = await res.json()

    return data
}