import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

// example snippet creation
// db.snippet.create({
//   data: {
//     title: 'Title',
//     code: 'const abc () => ...'
//   }
// })
