const router = require('express').Router()
const DbUsers = require('../../models/users')

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
