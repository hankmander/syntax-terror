const jwt = require('jsonwebtoken')
const APP_SECRET = 'GraphQL-is-aw3some'

async function createProfile (parent, { input }, context, info) {
  const profile = await context.prisma.createProfile({ ...input })
  const token = jwt.sign({ id: profile.id }, APP_SECRET)
  return {
    authToken: token,
    profile
  }
}

module.exports = {
  createProfile
}
