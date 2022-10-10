import { Meteor } from "meteor/meteor"
import { prisma } from "../db";

export const query =
  () => prisma.user.findMany({ include: { posts: true } });


Meteor.methods({
  'getMessages': query,
})
