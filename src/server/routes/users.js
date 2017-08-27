const router = require('express').Router()
const DbUsers = require('../../models/users')

router.route('/update/:userId')
  .get((request, response) => {
    const user = request.user

    response.render('update_profile', { user: user })
  })
  .post((request, response) => {
    const userId = request.params.userId
    const {username, current_city} = request.body

    DbUsers.updateUserProfileById(userId, username, current_city).then(() => {
      response.redirect(`/users/profile/${userId}`)
    })
  })

router.post('/update/image/:userId', (request, response) => {
  const userId = request.params.userId
  const {imgurl} = request.body

  DbUsers.updateUserImageById(userId, imgurl).then(() => {
    response.redirect(`/users/profile/${userId}`)
  })
})

router.get('/profile/:userId', (request, response) => {
  const user = request.user

  DbUsers.getUserPostsById(user.id).then((posts) => {
    response.render('profile', {
      user: user,
      posts: posts
    })
  })
})

module.exports = router
