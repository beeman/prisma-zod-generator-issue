import { z } from 'zod'

const Schema = z
  .object({
    id: z.literal(true).optional(),
    email: z.literal(true).optional(),
    name: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const UserCountAggregateInputObjectSchema = Schema
