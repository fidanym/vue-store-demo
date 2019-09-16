import users from './data/users'

const fetch = (mockData, time = 0) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mockData)
        }, time)
    })
}

const usernameExists = (users, username, time = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let found = users.find(user => user.username === username);
            if (found)
                resolve(found)
            else
                reject(0)
        }, time)
    })
}

const passwordIsCorrect = (users, username, password, time = 0) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(users.find(user => user.username === username && user.password === password))
        }, time)
    })
}

export default {
    fetchUsers() {
        return fetch(users, 1000)
    },
    usernameExists(username) {
        return usernameExists(users, username, 500)
    }
}