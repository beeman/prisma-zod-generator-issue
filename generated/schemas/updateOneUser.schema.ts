import { z } from 'zod';
import { UserSelectObjectSchema } from './objects/UserSelect.schema.js';
import { UserUpdateInputObjectSchema } from './objects/UserUpdateInput.schema.js';
import { UserUncheckedUpdateInputObjectSchema } from './objects/UserUncheckedUpdateInput.schema.js';
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema.js'

export const UserUpdateOneSchema = z.object({ select: UserSelectObjectSchema.optional(),  data: z.union([UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema]), where: UserWhereUniqueInputObjectSchema  })