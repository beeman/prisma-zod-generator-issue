import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import { UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema.js'
import { UserWhereInputObjectSchema } from './objects/UserWhereInput.schema.js'
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema.js'
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema.js'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
  })
  .strict()

export const UserSelectZodSchema = z
  .object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
  })
  .strict()

export const UserFindFirstSchema: z.ZodType<Prisma.UserFindFirstArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    orderBy: z
      .union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()])
      .optional(),
    where: UserWhereInputObjectSchema.optional(),
    cursor: UserWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional(),
  })
  .strict()

export const UserFindFirstZodSchema = z
  .object({
    select: UserSelectSchema.optional(),
    orderBy: z
      .union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()])
      .optional(),
    where: UserWhereInputObjectSchema.optional(),
    cursor: UserWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional(),
  })
  .strict()
