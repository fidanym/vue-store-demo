// This is an API mock, just replace static data with axios calls
import users from './data/users'
import customers from './data/customers'
import products from './data/users'

/**
 * Check whether the passed username already exists in the users list
 * @param users
 * @param username
 * @param time
 * @returns {Promise<any>}
 */
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

/**
 * Check if the combination of username and password match against the users list
 * @param users
 * @param username
 * @param password
 * @param time
 * @returns {Promise<any>}
 */
const passwordIsCorrect = (users, username, password, time = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let found = userDetailsCorrect(users, username, password);
            if (found) {
                let user = {id: found.id, username: found.username, email: found.email}
                resolve(user)
            }
            else {
                reject(0)
            }
        }, time)
    })
}

/**
 * Register a new user if it doesn't already exist in list
 * @param users
 * @param username
 * @param password
 * @param email
 * @param time
 * @returns {Promise<any>}
 */
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

const getCustomers = (customers, time) => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(customers)
        }, time)
    })
}

/**
 * Helper function to check if a user exists by email and username
 * @param users
 * @param username
 * @param email
 * @returns {*}
 */
const userExists = (users, username, email) => {
    return users.find(user => user.username === username || user.email === email);
}

/**
 * Check if a user's username and password are a valid combination
 * @param users
 * @param username
 * @param password
 * @returns {*}
 */
const userDetailsCorrect = (users, username, password) => {
    return users.find(user => user.username === username && user.password === password);
}

/**
 * Return the next incremental user ID
 * @param users
 * @returns {number}
 */
const nextId = function (users) {
    return Math.max(...users.map(user => user.id))
}

export default {
    usernameExists(username) {
        return usernameExists(users, username, 500)
    },

    passwordIsCorrect(username, password) {
        return passwordIsCorrect(users, username, password, 500)
    },

    registerUser(username, password, email){
        return register(users, username, password, email, 500)
    },

    fetchCustomers() {
        return getCustomers(customers, 750)
    }
}
