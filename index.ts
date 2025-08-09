import { config } from "dotenv";
import { PrismaBetterSQLite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from './generated/prisma';

config({ quiet: true })

const adapter = new PrismaBetterSQLite3({
  url: process.env.DATABASE_URL
});
export const db = new PrismaClient({ adapter });

const userCount = await db.user.count()

console.log(`There are ${userCount} users!`)
const name = `user-${Math.random().toString(36).substr(2, 9)}`
const created = await db.user.create({ data: { name, email: `${name}@example.com` } })

console.log(`Created user: ${created.email}`)

const users = await db.user.findMany()

console.log(`Users: ${users?.map(u => u.email).join(', ')}`)