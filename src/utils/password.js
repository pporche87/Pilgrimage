const bcrypt = require('bcrypt')
const saltRounds = 10

const comparePassword = (password, confirmPassword) =>
  password === confirmPassword

const makeHashedPassword = (plainTxtPassword) => {
  return bcrypt.hash(plainTxtPassword, saltRounds)
}

const isValidPassword = (plainTxtPassword, hash) => {
  return bcrypt.compare(plainTxtPassword, hash)
}

module.exports = {
  comparePassword,
  makeHashedPassword,
  isValidPassword
}
