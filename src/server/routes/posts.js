const router = require('express').Router()
const DbUsers = require('../../models/users')
const DbCities = require('../../models/cities')

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

router.route('/post/:postId/edit')
  .get((request, response) => {
    const postId = request.params.postId

    DbUsers.getPostById(postId).then((post) => {
      response.render('edit', {post: post[0]})
    })
  })
  .post((request, response) => {
    const postId = request.params.postId
    const {title, content} = request.body

    DbCities.editCityPostByPostId(title, content, postId).then((post) => {
      post = post[0]
      response.redirect(`/cities/${post.sacred_sites_id}`)
    })
  })

router.get('/post/:postId/delete', (request, response) => {
  const postId = request.params.postId

  DbCities.deleteCityPostByPostId(postId).then(() => {
    response.redirect('back')
  })
})

module.exports = router
