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

const updateUserProfileById = (id, username, current_city) => {
  console.log(username, current_city);
  return DbUsers.updateUserProfileById(id, username, current_city)
}

module.exports = {
  createUser,
  getUserById,
  updateUserProfileById
}
