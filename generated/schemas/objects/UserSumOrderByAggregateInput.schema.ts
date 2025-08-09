import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema.js'

const Schema = z
  .object({
    id: SortOrderSchema.optional(),
  })
  .strict()

export const UserSumOrderByAggregateInputObjectSchema = Schema
