const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (request,response) => {
	response.redirect('/login')
})

app.get('/login', (request, response) => {
	response.render('login')
})

app.get('/signup', (request,response) => {
	response.render('signup')
})

app.use((request, response) => {
	response.status(404).render('not_found')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
})
