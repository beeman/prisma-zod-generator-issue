import { z } from 'zod'

const Schema = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict()

export const UserSumAggregateInputObjectSchema = Schema
