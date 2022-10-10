import { Meteor } from "meteor/meteor";
import { prisma } from "../db";

export const mutate = (name: string, email: string) =>
  prisma.user.create({
    data: {
      name,
      email,
      posts: {
        create: { title: 'Salve mundao' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  })

Meteor.methods({
  'insertMessage': mutate,
})
