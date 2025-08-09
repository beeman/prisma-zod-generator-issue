import { z } from 'zod'

const Schema = z
  .object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
  })
  .strict()

export const UserSelectObjectSchema = Schema
