import { z } from 'zod'
import { UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema.js'
import { UserWhereInputObjectSchema } from './objects/UserWhereInput.schema.js'
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema.js'
import { UserCountAggregateInputObjectSchema } from './objects/UserCountAggregateInput.schema.js'
import { UserMinAggregateInputObjectSchema } from './objects/UserMinAggregateInput.schema.js'
import { UserMaxAggregateInputObjectSchema } from './objects/UserMaxAggregateInput.schema.js'
import { UserAvgAggregateInputObjectSchema } from './objects/UserAvgAggregateInput.schema.js'
import { UserSumAggregateInputObjectSchema } from './objects/UserSumAggregateInput.schema.js'

export const UserAggregateSchema = z.object({
  orderBy: z
    .union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: UserWhereInputObjectSchema.optional(),
  cursor: UserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), UserCountAggregateInputObjectSchema]).optional(),
  _min: UserMinAggregateInputObjectSchema.optional(),
  _max: UserMaxAggregateInputObjectSchema.optional(),
  _avg: UserAvgAggregateInputObjectSchema.optional(),
  _sum: UserSumAggregateInputObjectSchema.optional(),
})
