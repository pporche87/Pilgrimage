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
    DbUsers.getUserPostsById(userId).then((posts) => {
      response.render('profile', {
        user: user,
        posts: posts
      })
    })
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
  const {username, current_city, img_url} = request.body
  DbUsers.updateUserProfileById(userId, username, current_city, img_url).then(() => {
    response.redirect(`/profile/${userId}`)
  })
})

router.post('/update/image/:userId', (request, response) => {
  const userId = request.params.userId
  const {imgurl} = request.body
  DbUsers.updateUserImageById(userId, imgurl).then(() => {
    response.redirect(`/profile/${userId}`)
  })
})

router.get('/post/:postId', (request, response) => {
  const postId = request.params.postId
  DbUsers.getPostById(postId).then((post) => {
    post = post[0]
    DbUsers.getUserByPostId(postId).then((user) => {
      user = user[0]
      response.render('show', {
        user: user,
        post: post
      })
    })
  })
})

module.exports = router
