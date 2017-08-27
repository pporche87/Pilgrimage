const db = require('./db')

const createUser = (user) => {
  return db.query(`INSERT INTO users (username, email, password)
  VALUES ($1, $2, $3) RETURNING *`,
    [user.username, user.email, user.password])
    .catch(error => error)
}

const checkUserByEmail = (email) => {
  return db.query('SELECT * FROM users WHERE email=$1',
    [email])
    .catch(error => error)
}

const getUserById = (id) => {
  return db.query('SELECT * FROM users WHERE id=$1',
    [id])
    .catch(error => error)
}

const updateUserProfileById = (id, username, current_city) => {
  return db.query('UPDATE users SET username=$2, current_city=$3 WHERE id=$1',
    [id, username, current_city])
    .catch(error => error)
}


module.exports = {
  createUser,
  checkUserByEmail,
  getUserById,
  updateUserProfileById
}
