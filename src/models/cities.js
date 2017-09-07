const DbCities = require('../db/cities')

const getCityById = (id) => {
  return DbCities.getCityById(id)
}

const getPostsByCityId = (id) => {
  return DbCities.getPostsByCityId(id)
}

const newCityPost = (title, content, id, cityId) => {
  return DbCities.newCityPost(title, content, id, cityId)
}

const editCityPostByPostId = (title, content, id) => {
  return DbCities.editCityPostByPostId(title, content, id)
}

const deleteCityPostByPostId = (id) => {
  return DbCities.deleteCityPostByPostId(id)
}

module.exports = {
  getCityById,
  getPostsByCityId,
  newCityPost,
  editCityPostByPostId,
  deleteCityPostByPostId,
}
