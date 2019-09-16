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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let found = userDetailsCorrect(users, username, password);
            if (found)
                resolve(found)
            else
                reject(0)
        }, time)
    })
}

const register = (users, username, password, email, time = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let found = userExists(users, username, email);
            if (found)
                reject('User already exists')

            let new_user = {
              "id": nextId(users),
              "email": email,
              "username": username,
              "password": password
            };

            users.push(new_user);

            resolve()
        }, time)
    })
}

const userExists = (users, username, email) => {
    return users.find(user => user.username === username || user.email === email);
}

const userDetailsCorrect = (users, username, password) => {
    return users.find(user => user.username === username && user.password === password);
}

const nextId = function (users) {
    return Math.max(...users.map(user => user.id))
}

export default {
    fetchUsers() {
        return fetch(users, 1000)
    },
    usernameExists(username) {
        return usernameExists(users, username, 500)
    },
    passwordIsCorrect(username, password) {
        return passwordIsCorrect(users, username, password, 500)
    },
    registerUser(username, password, email){
        return register(users, username, password, email, 500)
    }
}