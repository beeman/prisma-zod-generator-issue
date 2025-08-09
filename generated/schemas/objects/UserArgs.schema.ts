import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserSelectObjectSchema } from './UserSelect.schema.js'

export const UserArgsObjectSchema = z.object({
  select: z.lazy(() => UserSelectObjectSchema).optional()
}).strict();
export const UserArgsObjectZodSchema = z.object({
  select: z.lazy(() => UserSelectObjectSchema).optional()
}).strict();
