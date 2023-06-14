import { z } from "zod";

export const tournamentSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().optional(),
});

export type TournamentFm = z.infer<typeof tournamentSchema>;
