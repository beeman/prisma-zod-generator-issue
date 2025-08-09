import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema.js'

export const UserSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput, Prisma.UserSumOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional()
}).strict();
export const UserSumOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional()
}).strict();
