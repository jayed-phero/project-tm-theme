export const addEvent = async eventData => {
    // const url = `http://localhost:5000/events`;

    const response = await fetch('http://localhost:8000/events', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json',
        },
        body: JSON.stringify(eventData),
    })

    const data = await response.json()

    return data
}