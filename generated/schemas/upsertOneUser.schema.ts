import { z } from 'zod'
import { UserSelectObjectSchema } from './objects/UserSelect.schema.js'
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema.js'
import { UserCreateInputObjectSchema } from './objects/UserCreateInput.schema.js'
import { UserUncheckedCreateInputObjectSchema } from './objects/UserUncheckedCreateInput.schema.js'
import { UserUpdateInputObjectSchema } from './objects/UserUpdateInput.schema.js'
import { UserUncheckedUpdateInputObjectSchema } from './objects/UserUncheckedUpdateInput.schema.js'

export const UserUpsertSchema = z.object({
  select: UserSelectObjectSchema.optional(),
  where: UserWhereUniqueInputObjectSchema,
  create: z.union([UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema]),
  update: z.union([UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema]),
})
