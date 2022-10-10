import { db } from "./db";
import { Meteor } from "meteor/meteor"
import { prisma } from "../db";

export const queryPrisma = () =>
  prisma.user.findMany({ include: { posts: true } });

Meteor.methods({
  'getMessagesPrisma': queryPrisma,
  'getMessagesMongoDB': () => db.find({}).fetch()
})
