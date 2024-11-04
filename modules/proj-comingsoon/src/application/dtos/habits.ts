import { z } from 'zod';

export const createHabitSchema = z.object({
  name: z.string().min(3),
});

export type CreateHabitSchemaType = z.infer<typeof createHabitSchema>;
