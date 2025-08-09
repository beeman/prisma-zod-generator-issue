import { z } from 'zod';
import { UserCreateManyInputObjectSchema } from './objects/UserCreateManyInput.schema.js'

export const UserCreateManySchema = z.object({ data: z.union([ UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema) ]),  })