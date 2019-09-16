import client from '../api/mock/index.js'

let Users = [
  {
    id: 1,
    email: 'john@mail.com',
    username: 'john',
    password: 'johnny'
  },
  {
    id: 2,
    email: 'mike@mail.com',
    username: 'mike',
    password: 'mikey'
  },
  {
    id: 3,
    email: 'anna@mail.com',
    username: 'anna',
    password: 'annie'
  },
  {
    id: 4,
    email: 'rick@mail.com',
    username: 'rick',
    password: 'ricky'
  }
]

let nextId = function () {
  return Math.max(...Users.map(user => user.id))
}

let generateToken = function () {
  let length = 15
  let allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('')
  let arrayOfRandomizedCharacters = []
  for (let i = 0; i < length; i++) {
    let randomSelection = (Math.random() * (allowedCharacters.length - 1)).toFixed(0)
    arrayOfRandomizedCharacters[i] = allowedCharacters[randomSelection]
  }
  return arrayOfRandomizedCharacters.join('')
}

let AuthPlugin = {
  logIn: function (username, password) {
    if (!username || !password) {
      return false
    }

    if (!Users.find(user => user.username === username && user.password === password)) {
      return false
    }

    setTimeout(() => {
      this.setToken(generateToken())
    }, 1000)

    return true
  },

  logout: function () {
    this.destroyToken()
  },

  // register: function() {
  //
  // },

  setToken: function (token) {
    sessionStorage.setItem('authToken', token)
  },

  destroyToken: function () {
    sessionStorage.removeItem('authToken')
  },

  getToken: function () {
    let token = sessionStorage.getItem('authToken')

    if (!token) {
      return null
    }

    return token
  },

  loggedIn: function () {
    return !!this.getToken()
  },

  userExists: function (username) {
    return client.usernameExists(username)
  }
}

export default function (Vue) {
  Vue.auth = AuthPlugin

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: function () {
        return Vue.auth
      }
    }
  })
}
