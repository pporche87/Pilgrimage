const DbUsers = require('../db/users')
const {makeHashedPassword} = require('../utils/password')

const createUser = (name, email, password) => {
  return makeHashedPassword(password).then(hash => {
    const credentials = {
      'username': name,
      'email': email,
      'password': hash
    }
    return DbUsers.createUser(credentials)
  })
}

const getUserById = (id) => {
  return DbUsers.getUserById(id)
}

module.exports = {
  createUser,
  getUserById
}
