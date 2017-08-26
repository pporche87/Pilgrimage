const bcrypt = require('bcrypt')
const saltRounds = 10

const comparePassword = (password, confirmPassword) =>
  password === confirmPassword

const makeHashedPassword = (plainTxtPassword) => {
  return bcrypt.hash(plainTxtPassword, saltRounds)
}

module.exports = {
  comparePassword,
  makeHashedPassword
}
