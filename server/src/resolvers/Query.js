function feed (root, args, context, info) {
  return context.prisma.profiles()
}

module.exports = {
  feed
}
