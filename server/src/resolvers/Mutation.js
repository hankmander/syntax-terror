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

async function updateProfile (root, { id, input }, context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const decoded = jwt.verify(token, APP_SECRET)
    if (decoded.id === id) {
      return context.prisma.updateProfile({
        where: { id },
        data: input
      })
    }
  }
  throw new Error('Not authenticated')
}

module.exports = {
  updateProfile,
  createProfile
}
