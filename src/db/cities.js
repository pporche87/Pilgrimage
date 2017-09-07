const db = require('./db')

const getCityById = (id) => {
  return db.query('SELECT * FROM sacred_sites WHERE id=$1',
    [id])
    .catch(error => error)
}

const getPostsByCityId = (id) => {
  return db.query(`SELECT posts.id, posts.title, posts.content, users.img_url FROM posts
  JOIN users ON user_id=users.id
  WHERE sacred_sites_id=$1
  ORDER BY created_at DESC;`,
    [id])
    .catch(error => error)
}

const newCityPost = (title, content, id, cityId) => {
  return db.query(`INSERT INTO posts (title, content, user_id, sacred_sites_id)
  VALUES ($1, $2, $3, $4)`,
    [title, content, id, cityId])
    .catch(error => error)
}

const editCityPostByPostId = (title, content, id) => {
  return db.query('UPDATE posts SET title=$1, content=$2 WHERE id=$3 RETURNING *',
    [title, content, id])
}

const deleteCityPostByPostId = (id) => {
  return db.query('DELETE FROM posts WHERE id=$1',
    [id])
}

module.exports = {
  getCityById,
  getPostsByCityId,
  newCityPost,
  editCityPostByPostId,
  deleteCityPostByPostId,
}
