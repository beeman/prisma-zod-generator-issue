import { z } from 'zod'
import { UserSelectObjectSchema } from './UserSelect.schema.js'

const Schema = z
  .object({
    select: z.lazy(() => UserSelectObjectSchema).optional(),
  })
  .strict()

export const UserArgsObjectSchema = Schema
