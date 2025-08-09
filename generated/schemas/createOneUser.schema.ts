import { z } from 'zod'
import { UserSelectObjectSchema } from './objects/UserSelect.schema.js'
import { UserCreateInputObjectSchema } from './objects/UserCreateInput.schema.js'
import { UserUncheckedCreateInputObjectSchema } from './objects/UserUncheckedCreateInput.schema.js'

export const UserCreateOneSchema = z.object({
  select: UserSelectObjectSchema.optional(),
  data: z.union([UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema]),
})
