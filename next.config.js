const dotEnvResult = require('dotenv').config()
const withPWA = require('next-pwa')

const prod = process.env.NODE_ENV === 'production'

if (dotEnvResult.error) {
  throw dotEnvResult.error
}

module.exports = withPWA({
  pwa: {
    dest: 'public/assets_next'
  },
  env: {
    PORT: process.env.PORT,
    BACKEND_URL: prod
      ? 'https://api.example.com'
      : 'https://localhost:8080/graphql'
  }
})

