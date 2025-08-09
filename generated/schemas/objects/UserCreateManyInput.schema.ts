import { z } from 'zod'

const Schema = z
  .object({
    id: z.number().int().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
  })
  .strict()

export const UserCreateManyInputObjectSchema = Schema
