const router = require('express').Router()
const users = require('./users')

router.get('/', (request,response) => {
  response.redirect('/login')
})

router.use('/', users)

module.exports = router
