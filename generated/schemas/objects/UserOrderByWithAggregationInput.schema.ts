import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema.js'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema.js'
import { UserCountOrderByAggregateInputObjectSchema } from './UserCountOrderByAggregateInput.schema.js'
import { UserAvgOrderByAggregateInputObjectSchema } from './UserAvgOrderByAggregateInput.schema.js'
import { UserMaxOrderByAggregateInputObjectSchema } from './UserMaxOrderByAggregateInput.schema.js'
import { UserMinOrderByAggregateInputObjectSchema } from './UserMinOrderByAggregateInput.schema.js'
import { UserSumOrderByAggregateInputObjectSchema } from './UserSumOrderByAggregateInput.schema.js'

const Schema = z
  .object({
    id: SortOrderSchema.optional(),
    email: SortOrderSchema.optional(),
    name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    _count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => UserAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => UserSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const UserOrderByWithAggregationInputObjectSchema = Schema
