import { z } from 'zod'

const Schema = z
  .object({
    email: z.string(),
    name: z.string().optional().nullable(),
  })
  .strict()

export const UserCreateInputObjectSchema = Schema
