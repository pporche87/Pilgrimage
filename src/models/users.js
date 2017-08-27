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
  return DbUsers.updateUserProfileById(id, username, current_city)
}

const updateUserImageById = (id, imgurl) => {
  return DbUsers.updateUserImageById(id, imgurl)
}

const getUserPostsById = (id) => {
  return DbUsers.getUserPostsById(id)
}

const getPostById = (id) => {
  return DbUsers.getPostById(id)
}

const getUserByPostId = (id) => {
  return DbUsers.getUserByPostId(id)
}

module.exports = {
  createUser,
  getUserById,
  updateUserProfileById,
  getUserPostsById,
  getPostById,
  getUserByPostId,
  updateUserImageById
}
