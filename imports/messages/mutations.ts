import { db } from "./db";
import { Meteor } from "meteor/meteor";
import { prisma } from "../db";

export const mutatePrisma = (name: string, email: string) =>
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
  'insertMessagePrisma': mutatePrisma,
  'insertMessageMongoDB': (name: string, email: string) => db.insert({ name, email })
})
