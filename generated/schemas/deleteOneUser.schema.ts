import { z } from 'zod';
import { UserSelectObjectSchema } from './objects/UserSelect.schema.js';
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema.js'

export const UserDeleteOneSchema = z.object({ select: UserSelectObjectSchema.optional(),  where: UserWhereUniqueInputObjectSchema  })