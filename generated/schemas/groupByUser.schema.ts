import { z } from 'zod'
import { UserWhereInputObjectSchema } from './objects/UserWhereInput.schema.js'
import { UserOrderByWithAggregationInputObjectSchema } from './objects/UserOrderByWithAggregationInput.schema.js'
import { UserScalarWhereWithAggregatesInputObjectSchema } from './objects/UserScalarWhereWithAggregatesInput.schema.js'
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema.js'

export const UserGroupBySchema = z.object({
  where: UserWhereInputObjectSchema.optional(),
  orderBy: z
    .union([UserOrderByWithAggregationInputObjectSchema, UserOrderByWithAggregationInputObjectSchema.array()])
    .optional(),
  having: UserScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UserScalarFieldEnumSchema),
})
