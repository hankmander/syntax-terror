function feed (root, args, context, info) {
  return context.prisma.profiles()
}

function profile (root, args, context, info) {
  return context.prisma.profile(args)
}

module.exports = {
  profile,
  feed
}
