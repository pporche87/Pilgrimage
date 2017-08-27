const router = require('express').Router()
// test db connection
const DbUsers = require('../../models/users')
const passport = require('../../config/authentication')

router.route('/login')
  .get((request, response) => {
    response.render('login')
  })
  .post((request, response, next) => {
    passport.authenticate('local', function (error, user) {
      if (error) { return next(error) }
      if (!user) { return response.render('login', {
        message: 'Email or password does not exist.',
        success: false
      }) }
      request.logIn(user, function(error) {
        if (error) { return next(error) }
        return response.redirect('/profile')
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
              return response.render('login', {
                success: true
              })
            next()
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

router.get('/profile', (request, response) => {
  if (request.session.passport.user) {
    const userId = request.session.passport.user
    return DbUsers.getUserById(userId).then(user => {
      user = user[0]
      response.render('profile', { user: user })
    })
  } else {
    response.redirect('/login')
  }
})

module.exports = router
