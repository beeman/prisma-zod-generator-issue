import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput, Prisma.UserCreateInput> = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();
export const UserCreateInputObjectZodSchema = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();
