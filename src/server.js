require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const routes = require('./server/routes')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use((request, response, next) => {
	response.locals.message = ''
	next()
})

app.use('/', routes)

app.use((request, response) => {
	response.status(404).render('not_found')
})

const port = process.env.NODE_ENV === 'development' ?
	process.env.DEV_PORT :
	process.env.TEST_PORT

console.log(port);

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
})
