const router = require('express').Router()
const DbCities = require('../../models/cities')

router.get('/:cityId', (request, response) => {
  const cityId = request.params.cityId

  Promise.all([
    DbCities.getCityById(cityId),
    DbCities.getPostsByCityId(cityId)
  ])
    .then(uniqueCityPosts => {
      const city = uniqueCityPosts[0][0]
      const posts = uniqueCityPosts[1]

      console.log(posts)

      response.render('city', {city, posts})
    })
})

router.route('/:cityId/new')
  .get((request, response) => {
    const cityId = request.params.cityId

    DbCities.getCityById(cityId).then((city) => {

      response.render('new', {city: city[0]})
    })
  })
  .post((request, response) => {
    const {title, content} = request.body
    const user = request.user
    const cityId = request.params.cityId

    DbCities.newCityPost(title, content, user.id, cityId).then(() => {
      response.redirect(`/cities/${cityId}`)
    })
  })


module.exports = router
