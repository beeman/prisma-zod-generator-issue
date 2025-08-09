import { z } from 'zod'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema.js'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema.js'

const Schema = z
  .object({
    id: z.number().int(),
    email: z.string(),
    AND: z
      .union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const UserWhereUniqueInputObjectSchema = Schema
