import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const UserCountAggregateInputObjectSchema: z.ZodType<Prisma.UserCountAggregateInputType, Prisma.UserCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  name: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UserCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  name: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
