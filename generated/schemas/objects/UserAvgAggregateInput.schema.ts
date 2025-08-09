import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const UserAvgAggregateInputObjectSchema: z.ZodType<Prisma.UserAvgAggregateInputType, Prisma.UserAvgAggregateInputType> = z.object({
  id: z.literal(true).optional()
}).strict();
export const UserAvgAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional()
}).strict();
