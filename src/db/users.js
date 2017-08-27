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

const updateUserProfileById = (id, username, current_city, img_url) => {
  return db.query('UPDATE users SET username=$2, current_city=$3 img_url=$4 WHERE id=$1',
    [id, username, current_city, img_url])
    .catch(error => error)
}

const updateUserImageById = (id, imgurl) => {
  return db.query('UPDATE users SET img_url=$2 WHERE id=$1',
    [id, imgurl])
    .catch(error => error)
}

const getUserPostsById = (id) => {
  return db.query('SELECT * FROM posts WHERE user_id=$1',
    [id])
    .catch(error => error)
}

const getPostById = (id) => {
  return db.query('SELECT * FROM posts WHERE id=$1',
    [id])
    .catch(error => error)
}

const getUserByPostId = (id) => {
  return db.query('SELECT * FROM users WHERE id = (SELECT user_id FROM posts WHERE id=$1)',
    [id])
    .catch(error => error)
}


module.exports = {
  createUser,
  checkUserByEmail,
  getUserById,
  updateUserProfileById,
  getUserPostsById,
  getPostById,
  getUserByPostId,
  updateUserImageById
}
