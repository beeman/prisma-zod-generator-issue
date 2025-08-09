import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput, Prisma.UserUncheckedCreateInput> = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();
export const UserUncheckedCreateInputObjectZodSchema = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();
