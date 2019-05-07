const jwt = require('jsonwebtoken')
const APP_SECRET = 'GraphQL-is-aw3some'

function getProfileId (context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { id } = jwt.verify(token, APP_SECRET)
    return id
  }

  throw new Error('Not authenticated')
}

module.exports = {
  APP_SECRET,
  getProfileId
}
