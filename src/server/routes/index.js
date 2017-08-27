const router = require('express').Router()
const users = require('./users')
const {isLoggedIn} = require('../middlewares')

router.use('/', users)

router.get('/', (request,response) => {
  if (isLoggedIn) {
    response.redirect('/profile')
  } else {
    response.redirect('/login')
  }
})

router.use(isLoggedIn)

router.get('/profile', (request, response) => {
  const user = request.user
  response.render('profile', { user: user })
})


module.exports = router
