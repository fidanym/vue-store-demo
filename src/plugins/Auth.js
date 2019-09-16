import client from '../api/mock/index.js'

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

    return new Promise((resolve, reject) => {
      if (!username || !password) {
        reject('Required details are missing')
      }

      client.passwordIsCorrect(username, password)
          .then(() => {
            this.setToken(generateToken())
            resolve('Successfuly logged in')
          })
          .catch(() => {
            reject('Username or password is incorrect')
          })
    })
  },

  logout: function () {
    this.destroyToken()
  },

  register: function(username, password, email) {
    return new Promise((resolve, reject) => {
      if (!username || !password || !email) {
        reject('Required details are missing')
      }

      // Do some validation?

      client.registerUser(username, password, email)
          .then(() => {
            resolve('Successfuly registered')
          })
          .catch(err => {
            reject(err)
          })
    })
  },

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
