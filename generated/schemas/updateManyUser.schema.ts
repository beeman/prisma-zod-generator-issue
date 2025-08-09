import { z } from 'zod'
import { UserUpdateManyMutationInputObjectSchema } from './objects/UserUpdateManyMutationInput.schema.js'
import { UserWhereInputObjectSchema } from './objects/UserWhereInput.schema.js'

export const UserUpdateManySchema = z.object({
  data: UserUpdateManyMutationInputObjectSchema,
  where: UserWhereInputObjectSchema.optional(),
})
