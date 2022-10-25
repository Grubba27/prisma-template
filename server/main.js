import { Meteor } from 'meteor/meteor';
import '../imports/messages';
import { prisma } from '../imports/db';

async function main() {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  if (allUsers.length >= 3) {
    return
  }
  await prisma.user.create({
    data: {
      name: 'Gabriel',
      email: 'gabriel@prisma.io',
      posts: {
        create: { title: 'Hello world' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  })

  await prisma.user.create({
    data: {
      name: 'Jon',
      email: 'jon@prisma.io',
      posts: {
        create: { title: 'Hello World' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  })

}

Meteor.startup(() => {
  // code to run on server at startup
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
});
