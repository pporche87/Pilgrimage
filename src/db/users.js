const db = require('./db')

const createUser = (username,email,password) =>
  db.query(`INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3) RETURNING *`,
    [username,email,password])
    .catch(error => error)

module.exports = {
  createUser
}
