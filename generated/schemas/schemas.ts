/**
 * Prisma Zod Generator - Single File (inlined)
 * Auto-generated. Do not edit.
 */

import { z } from 'zod';
import type { Prisma } from '@prisma/client';

// File: TransactionIsolationLevel.schema.ts

export const TransactionIsolationLevelSchema = z.enum(['Serializable'])

// File: UserScalarFieldEnum.schema.ts

export const UserScalarFieldEnumSchema = z.enum(['id', 'email', 'name'])

// File: SortOrder.schema.ts

export const SortOrderSchema = z.enum(['asc', 'desc'])

// File: NullsOrder.schema.ts

export const NullsOrderSchema = z.enum(['first', 'last'])

// File: UserWhereInput.schema.ts

export const UserWhereInputObjectSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const UserWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();


// File: UserOrderByWithRelationInput.schema.ts

export const UserOrderByWithRelationInputObjectSchema = z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const UserOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();


// File: UserWhereUniqueInput.schema.ts


export const UserWhereUniqueInputObjectSchema = z.object({
  id: z.number().int(),
  email: z.string()
}).strict();
export const UserWhereUniqueInputObjectZodSchema = z.object({
  id: z.number().int(),
  email: z.string()
}).strict();


// File: UserOrderByWithAggregationInput.schema.ts

export const UserOrderByWithAggregationInputObjectSchema = z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => UserAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => UserSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => UserAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => UserSumOrderByAggregateInputObjectSchema).optional()
}).strict();


// File: UserScalarWhereWithAggregatesInput.schema.ts

export const UserScalarWhereWithAggregatesInputObjectSchema = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const UserScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();


// File: UserCreateInput.schema.ts


export const UserCreateInputObjectSchema = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();
export const UserCreateInputObjectZodSchema = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();


// File: UserUncheckedCreateInput.schema.ts


export const UserUncheckedCreateInputObjectSchema = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();
export const UserUncheckedCreateInputObjectZodSchema = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();


// File: UserUpdateInput.schema.ts

export const UserUpdateInputObjectSchema = z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const UserUpdateInputObjectZodSchema = z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();


// File: UserUncheckedUpdateInput.schema.ts

export const UserUncheckedUpdateInputObjectSchema = z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const UserUncheckedUpdateInputObjectZodSchema = z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();


// File: UserCreateManyInput.schema.ts


export const UserCreateManyInputObjectSchema = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();
export const UserCreateManyInputObjectZodSchema = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();


// File: UserUpdateManyMutationInput.schema.ts

export const UserUpdateManyMutationInputObjectSchema = z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const UserUpdateManyMutationInputObjectZodSchema = z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();


// File: UserUncheckedUpdateManyInput.schema.ts

export const UserUncheckedUpdateManyInputObjectSchema = z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const UserUncheckedUpdateManyInputObjectZodSchema = z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();


// File: IntFilter.schema.ts

export const IntFilterObjectSchema = z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntFilterObjectSchema)]).optional()
}).strict();
export const IntFilterObjectZodSchema = z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntFilterObjectSchema)]).optional()
}).strict();


// File: StringFilter.schema.ts

export const StringFilterObjectSchema = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)]).optional()
}).strict();
export const StringFilterObjectZodSchema = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)]).optional()
}).strict();


// File: StringNullableFilter.schema.ts

export const StringNullableFilterObjectSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const StringNullableFilterObjectZodSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterObjectSchema)]).optional().nullable()
}).strict();


// File: SortOrderInput.schema.ts

export const SortOrderInputObjectSchema = z.object({
  sort: SortOrderSchema,
  nulls: NullsOrderSchema.optional()
}).strict();
export const SortOrderInputObjectZodSchema = z.object({
  sort: SortOrderSchema,
  nulls: NullsOrderSchema.optional()
}).strict();


// File: UserCountOrderByAggregateInput.schema.ts

export const UserCountOrderByAggregateInputObjectSchema = z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();
export const UserCountOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();


// File: UserAvgOrderByAggregateInput.schema.ts

export const UserAvgOrderByAggregateInputObjectSchema = z.object({
  id: SortOrderSchema.optional()
}).strict();
export const UserAvgOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional()
}).strict();


// File: UserMaxOrderByAggregateInput.schema.ts

export const UserMaxOrderByAggregateInputObjectSchema = z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();
export const UserMaxOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();


// File: UserMinOrderByAggregateInput.schema.ts

export const UserMinOrderByAggregateInputObjectSchema = z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();
export const UserMinOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();


// File: UserSumOrderByAggregateInput.schema.ts

export const UserSumOrderByAggregateInputObjectSchema = z.object({
  id: SortOrderSchema.optional()
}).strict();
export const UserSumOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional()
}).strict();


// File: IntWithAggregatesFilter.schema.ts

export const IntWithAggregatesFilterObjectSchema = z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedIntFilterObjectSchema).optional()
}).strict();
export const IntWithAggregatesFilterObjectZodSchema = z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedIntFilterObjectSchema).optional()
}).strict();


// File: StringWithAggregatesFilter.schema.ts

export const StringWithAggregatesFilterObjectSchema = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringFilterObjectSchema).optional()
}).strict();
export const StringWithAggregatesFilterObjectZodSchema = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringFilterObjectSchema).optional()
}).strict();


// File: StringNullableWithAggregatesFilter.schema.ts

export const StringNullableWithAggregatesFilterObjectSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterObjectSchema).optional()
}).strict();
export const StringNullableWithAggregatesFilterObjectZodSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterObjectSchema).optional()
}).strict();


// File: StringFieldUpdateOperationsInput.schema.ts


export const StringFieldUpdateOperationsInputObjectSchema = z.object({
  set: z.string().optional()
}).strict();
export const StringFieldUpdateOperationsInputObjectZodSchema = z.object({
  set: z.string().optional()
}).strict();


// File: NullableStringFieldUpdateOperationsInput.schema.ts


export const NullableStringFieldUpdateOperationsInputObjectSchema = z.object({
  set: z.string().optional().nullable()
}).strict();
export const NullableStringFieldUpdateOperationsInputObjectZodSchema = z.object({
  set: z.string().optional().nullable()
}).strict();


// File: IntFieldUpdateOperationsInput.schema.ts


export const IntFieldUpdateOperationsInputObjectSchema = z.object({
  set: z.number().int().optional(),
  increment: z.number().int().optional(),
  decrement: z.number().int().optional(),
  multiply: z.number().int().optional(),
  divide: z.number().int().optional()
}).strict();
export const IntFieldUpdateOperationsInputObjectZodSchema = z.object({
  set: z.number().int().optional(),
  increment: z.number().int().optional(),
  decrement: z.number().int().optional(),
  multiply: z.number().int().optional(),
  divide: z.number().int().optional()
}).strict();


// File: NestedIntFilter.schema.ts


export const NestedIntFilterObjectSchema = z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntFilterObjectSchema)]).optional()
}).strict();
export const NestedIntFilterObjectZodSchema = z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntFilterObjectSchema)]).optional()
}).strict();


// File: NestedStringFilter.schema.ts


export const NestedStringFilterObjectSchema = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)]).optional()
}).strict();
export const NestedStringFilterObjectZodSchema = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)]).optional()
}).strict();


// File: NestedStringNullableFilter.schema.ts


export const NestedStringNullableFilterObjectSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedStringNullableFilterObjectZodSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterObjectSchema)]).optional().nullable()
}).strict();


// File: NestedIntWithAggregatesFilter.schema.ts

export const NestedIntWithAggregatesFilterObjectSchema = z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedIntFilterObjectSchema).optional()
}).strict();
export const NestedIntWithAggregatesFilterObjectZodSchema = z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedIntFilterObjectSchema).optional()
}).strict();


// File: NestedFloatFilter.schema.ts


export const NestedFloatFilterObjectSchema = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatFilterObjectSchema)]).optional()
}).strict();
export const NestedFloatFilterObjectZodSchema = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatFilterObjectSchema)]).optional()
}).strict();


// File: NestedStringWithAggregatesFilter.schema.ts

export const NestedStringWithAggregatesFilterObjectSchema = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringFilterObjectSchema).optional()
}).strict();
export const NestedStringWithAggregatesFilterObjectZodSchema = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringFilterObjectSchema).optional()
}).strict();


// File: NestedStringNullableWithAggregatesFilter.schema.ts

export const NestedStringNullableWithAggregatesFilterObjectSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterObjectSchema).optional()
}).strict();
export const NestedStringNullableWithAggregatesFilterObjectZodSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterObjectSchema).optional()
}).strict();


// File: NestedIntNullableFilter.schema.ts


export const NestedIntNullableFilterObjectSchema = z.object({
  equals: z.number().int().optional().nullable(),
  in: z.number().int().array().optional().nullable(),
  notIn: z.number().int().array().optional().nullable(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedIntNullableFilterObjectZodSchema = z.object({
  equals: z.number().int().optional().nullable(),
  in: z.number().int().array().optional().nullable(),
  notIn: z.number().int().array().optional().nullable(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntNullableFilterObjectSchema)]).optional().nullable()
}).strict();


// File: UserCountAggregateInput.schema.ts


export const UserCountAggregateInputObjectSchema = z.object({
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


// File: UserAvgAggregateInput.schema.ts


export const UserAvgAggregateInputObjectSchema = z.object({
  id: z.literal(true).optional()
}).strict();
export const UserAvgAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional()
}).strict();


// File: UserSumAggregateInput.schema.ts


export const UserSumAggregateInputObjectSchema = z.object({
  id: z.literal(true).optional()
}).strict();
export const UserSumAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional()
}).strict();


// File: UserMinAggregateInput.schema.ts


export const UserMinAggregateInputObjectSchema = z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  name: z.literal(true).optional()
}).strict();
export const UserMinAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  name: z.literal(true).optional()
}).strict();


// File: UserMaxAggregateInput.schema.ts


export const UserMaxAggregateInputObjectSchema = z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  name: z.literal(true).optional()
}).strict();
export const UserMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  name: z.literal(true).optional()
}).strict();


// File: UserSelect.schema.ts


export const UserSelectObjectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional()
}).strict();
export const UserSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional()
}).strict();


// File: UserArgs.schema.ts

export const UserArgsObjectSchema = z.object({
  select: z.lazy(() => UserSelectObjectSchema).optional()
}).strict();
export const UserArgsObjectZodSchema = z.object({
  select: z.lazy(() => UserSelectObjectSchema).optional()
}).strict();


// File: findUniqueUser.schema.ts

export const UserFindUniqueSchema = z.object({ select: UserSelectObjectSchema.optional(),  where: UserWhereUniqueInputObjectSchema })

// File: findFirstUser.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindFirstSelectSchema__findFirstUser_schema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional()
  }).strict();

export const UserFindFirstSelectZodSchema__findFirstUser_schema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional()
  }).strict();

export const UserFindFirstSchema = z.object({ select: UserFindFirstSelectSchema__findFirstUser_schema.optional(),  orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();

export const UserFindFirstZodSchema = z.object({ select: UserFindFirstSelectSchema__findFirstUser_schema.optional(),  orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManyUser.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindManySelectSchema__findManyUser_schema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional()
  }).strict();

export const UserFindManySelectZodSchema__findManyUser_schema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional()
  }).strict();

export const UserFindManySchema = z.object({ select: UserFindManySelectSchema__findManyUser_schema.optional(),  orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();

export const UserFindManyZodSchema = z.object({ select: UserFindManySelectSchema__findManyUser_schema.optional(),  orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();

// File: createOneUser.schema.ts

export const UserCreateOneSchema = z.object({ select: UserSelectObjectSchema.optional(),  data: z.union([UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema])  })

// File: createManyUser.schema.ts

export const UserCreateManySchema = z.object({ data: z.union([ UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema) ]),  })

// File: deleteOneUser.schema.ts

export const UserDeleteOneSchema = z.object({ select: UserSelectObjectSchema.optional(),  where: UserWhereUniqueInputObjectSchema  })

// File: deleteManyUser.schema.ts

export const UserDeleteManySchema = z.object({ where: UserWhereInputObjectSchema.optional()  })

// File: updateOneUser.schema.ts

export const UserUpdateOneSchema = z.object({ select: UserSelectObjectSchema.optional(),  data: z.union([UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema]), where: UserWhereUniqueInputObjectSchema  })

// File: updateManyUser.schema.ts

export const UserUpdateManySchema = z.object({ data: UserUpdateManyMutationInputObjectSchema, where: UserWhereInputObjectSchema.optional()  })

// File: upsertOneUser.schema.ts

export const UserUpsertSchema = z.object({ select: UserSelectObjectSchema.optional(),  where: UserWhereUniqueInputObjectSchema, create: z.union([ UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema ]), update: z.union([ UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema ])  })

// File: aggregateUser.schema.ts

export const UserAggregateSchema = z.object({ orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), UserCountAggregateInputObjectSchema ]).optional(), _min: UserMinAggregateInputObjectSchema.optional(), _max: UserMaxAggregateInputObjectSchema.optional(), _avg: UserAvgAggregateInputObjectSchema.optional(), _sum: UserSumAggregateInputObjectSchema.optional() })

// File: groupByUser.schema.ts

export const UserGroupBySchema = z.object({ where: UserWhereInputObjectSchema.optional(), orderBy: z.union([UserOrderByWithAggregationInputObjectSchema, UserOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UserScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UserScalarFieldEnumSchema)  })

// File: UserFindUniqueResult.schema.ts
export const UserFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().optional()
}));

// File: UserFindFirstResult.schema.ts
export const UserFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().optional()
}));

// File: UserFindManyResult.schema.ts
export const UserFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});

// File: UserCreateResult.schema.ts
export const UserCreateResultSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().optional()
});

// File: UserCreateManyResult.schema.ts
export const UserCreateManyResultSchema = z.object({
  count: z.number()
});

// File: UserUpdateResult.schema.ts
export const UserUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().optional()
}));

// File: UserUpdateManyResult.schema.ts
export const UserUpdateManyResultSchema = z.object({
  count: z.number()
});

// File: UserUpsertResult.schema.ts
export const UserUpsertResultSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().optional()
});

// File: UserDeleteResult.schema.ts
export const UserDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().optional()
}));

// File: UserDeleteManyResult.schema.ts
export const UserDeleteManyResultSchema = z.object({
  count: z.number()
});

// File: UserAggregateResult.schema.ts
export const UserAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    email: z.number(),
    name: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    email: z.string().nullable(),
    name: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    email: z.string().nullable(),
    name: z.string().nullable()
  }).nullable().optional()});

// File: UserGroupByResult.schema.ts
export const UserGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string(),
  _count: z.object({
    id: z.number(),
    email: z.number(),
    name: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    email: z.string().nullable(),
    name: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    email: z.string().nullable(),
    name: z.string().nullable()
  }).nullable().optional()
}));

// File: UserCountResult.schema.ts
export const UserCountResultSchema = z.number();

// File: index.ts


// File: index.ts

