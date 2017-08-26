const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (request, response) => {
	console.log('I am the splash page')
	response.render('login')
})

app.use((request, response) => {
	response.status(404).render('not_found')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
})
