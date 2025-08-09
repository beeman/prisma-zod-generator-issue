import { z } from 'zod';

// prettier-ignore
export const UserInputSchema = z.object({
    email: z.string(),
    name: z.string().optional().nullable()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
