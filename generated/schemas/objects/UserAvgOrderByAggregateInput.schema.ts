import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema.js'

export const UserAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserAvgOrderByAggregateInput, Prisma.UserAvgOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional()
}).strict();
export const UserAvgOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional()
}).strict();
