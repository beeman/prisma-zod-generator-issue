import { z } from 'zod'

const Schema = z
  .object({
    set: z.string().optional().nullable(),
  })
  .strict()

export const NullableStringFieldUpdateOperationsInputObjectSchema = Schema
