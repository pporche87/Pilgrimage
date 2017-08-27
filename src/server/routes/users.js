const router = require('express').Router()
// test db connection
const DbUsers = require('../../models/users')
const passport = require('../../config/authentication')
const newUserEmail = require('../../utils/welcome_email')

router.route('/login')
  .get((request, response) => {
    response.render('login')
  })
  .post((request, response, next) => {
    passport.authenticate('local', function (error, user) {
      if (error) { return next(error) }
      if (!user) { return response.render('login', {
        message: 'Email or password does not exist.'
      }) }
      request.logIn(user, function(error) {
        if (error) { return next(error) }
        return response.redirect(`/profile/${user.id}`)
      })
    })(request, response, next)
  })

router.route('/signup')
  .get((request, response) => {
    response.render('signup')
  })
  .post((request, response, next) => {
    const { username, email, password, confirmPassword } = request.body
    if (password === confirmPassword) {
      DbUsers.createUser(username,email,password)
        .then((user) => {
          if (user.name === 'error') {
            return response.render('signup', {
              message: 'User is already registerd',
              success: false
            })
          } else {
            if (user)
              user = user[0]
            newUserEmail(user.username, user.email)
            return response.render('login', {
              success: true
            })
          }
        })
        .catch(error => error)
    } else {
      response.render('signup', {
        message: 'Passwords do not match.',
        success: false
      })
    }
  })

router.get('/logout', (request, response) => {
  request.session.destroy(() => {
    response.redirect('/login')
  })
})

module.exports = router
