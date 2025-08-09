import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema.js'
import { NullsOrderSchema } from '../enums/NullsOrder.schema.js'

const Schema = z
  .object({
    sort: SortOrderSchema,
    nulls: NullsOrderSchema.optional(),
  })
  .strict()

export const SortOrderInputObjectSchema = Schema
