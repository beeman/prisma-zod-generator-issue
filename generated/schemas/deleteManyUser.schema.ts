import { z } from 'zod';
import { UserWhereInputObjectSchema } from './objects/UserWhereInput.schema.js'

export const UserDeleteManySchema = z.object({ where: UserWhereInputObjectSchema.optional()  })