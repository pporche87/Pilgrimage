const router = require('express').Router()
// test db connection
const DbUsers = require('../../models/users')


router.get('/login', (request, response) => {
  response.render('login')
})

router.route('/signup')
  .get((request, response) => {
    response.render('signup')
  })
  .post((request, response) => {
    const { username, email, password, confirmPassword } = request.body
    if (password === confirmPassword) {
      DbUsers.createUser(username,email,password)
        .then((data) => {
          console.log(data)
        })
        .catch(error => error)
    } else {
      response.render('signup', {
        message: 'Passwords do not match.',
        success: false
      })
    }
  })

module.exports = router
