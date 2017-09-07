require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const routes = require('./server/routes')
const bodyParser = require('body-parser')
const passport = require('./config/authentication')
const session = require('express-session')
const cookieParser = require('cookie-parser')

app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use((request, response, next) => {
  response.locals.message = ''
  response.locals.isLoggedIn = false
  response.locals.moment = require('moment')
  next()
})

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 * 30 }
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', routes)

app.use((request, response) => {
  response.status(404).render('not_found')
})

const port = process.env.NODE_ENV === 'development' ?
  process.env.DEV_PORT :
  process.env.TEST_PORT

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})
