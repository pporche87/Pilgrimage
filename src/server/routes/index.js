const router = require('express').Router()
const auth = require('./auth')
const users = require('./users')
const posts = require('./posts')
const cities = require('./cities')

const {isLoggedIn} = require('../middlewares')

router.use('/', auth)

router.get('/', (request,response) => response.redirect('/login'))

router.use('/cities', cities)
router.use(isLoggedIn)
router.use('/users', users)
router.use('/posts', posts)

module.exports = router
