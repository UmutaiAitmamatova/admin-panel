const BASE_URL = 'https://auth-5cb0d-default-rtdb.firebaseio.com/'

export const API = {
    get: url => {
        return fetch(`${BASE_URL}${url}.json`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json())
    }, 
    post: (url, data) => {
        return fetch(`${BASE_URL}${url}.json`, {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json())
    }
}