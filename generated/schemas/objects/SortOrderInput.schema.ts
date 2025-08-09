import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema.js';
import { NullsOrderSchema } from '../enums/NullsOrder.schema.js'

export const SortOrderInputObjectSchema: z.ZodType<Prisma.SortOrderInput, Prisma.SortOrderInput> = z.object({
  sort: SortOrderSchema,
  nulls: NullsOrderSchema.optional()
}).strict();
export const SortOrderInputObjectZodSchema = z.object({
  sort: SortOrderSchema,
  nulls: NullsOrderSchema.optional()
}).strict();
