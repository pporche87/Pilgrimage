module.exports = (env) => {
  if (env === 'development') {
    return process.env.DB_DEV_URL
  } else if (env === 'test') {
    return process.env.DB_TEST_URL
  } else if (env === 'production') {
    return process.env.DB_PRODUCTION_URL
  }
}
