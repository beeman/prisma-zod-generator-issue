import { z } from 'zod';
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