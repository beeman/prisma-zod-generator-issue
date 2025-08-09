import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const UserMinAggregateInputObjectSchema: z.ZodType<Prisma.UserMinAggregateInputType, Prisma.UserMinAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  name: z.literal(true).optional()
}).strict();
export const UserMinAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  name: z.literal(true).optional()
}).strict();
