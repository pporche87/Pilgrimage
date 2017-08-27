const router = require('express').Router()
const users = require('./users')
const DbUsers = require('../../models/users')
const {isLoggedIn} = require('../middlewares')

router.use('/', users)

router.get('/', (request,response) => {
  if (isLoggedIn) {
    // response.redirect('/profile/')
  } else {
    response.redirect('/login')
  }
})

router.use(isLoggedIn)

router.get('/profile/:userId', (request, response) => {
  const user = request.user
  const userId = request.params.userId
  if (user.id === parseInt(userId)) {
    response.render('profile', { user: user })
  } else {
    response.redirect('/login')
  }
})

router.get('/update/:userId', (request, response) => {
  const user = request.user
  response.render('update_profile', { user: user })
})

router.post('/update/:userId', (request, response) => {
  const userId = request.params.userId
  const {username, current_city} = request.body
  DbUsers.updateUserProfileById(userId, username, current_city).then(() => {
    response.redirect(`/profile/${userId}`)
  })
})

module.exports = router
