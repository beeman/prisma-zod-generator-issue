import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema.js'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema.js'

const Schema = z
  .object({
    id: SortOrderSchema.optional(),
    email: SortOrderSchema.optional(),
    name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  })
  .strict()

export const UserOrderByWithRelationInputObjectSchema = Schema
