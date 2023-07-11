import { z } from "zod";

export const matchSchema = z
  .object({
    matchId: z.number().positive(),
    description: z.string().optional(),
  })
  .strict();

export type MatchFm = z.infer<typeof matchSchema>;
