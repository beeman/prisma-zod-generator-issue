import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput, Prisma.UserCreateManyInput> = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();
export const UserCreateManyInputObjectZodSchema = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();
