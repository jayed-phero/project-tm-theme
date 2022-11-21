export const setAuthToken = user => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL
    }

    //   save user in DB get token
    fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // save data inlocalstorage
        localStorage.setItem('eduTMToken', data.token)
    })
}