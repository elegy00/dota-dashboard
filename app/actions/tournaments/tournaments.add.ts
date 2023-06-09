import type { ActionArgs } from "@remix-run/node";
import type { WithId } from "mongodb";
import { TournamentService } from "~/services";
import type { Tournament } from "~/types/tournament";
import type { TournamentFm } from "~/validation/tournamentSchema";
import { tournamentSchema } from "~/validation/tournamentSchema";
import type { ActionRoute } from "../types";

const addTournament =
  (route: ActionRoute<undefined>) => async (body: TournamentFm) => {
    return await fetch(route.path(undefined), {
      method: route.method,
      body: JSON.stringify(body),
    });
  };

const onTournamentAdd = async ({
  request,
}: ActionArgs): Promise<WithId<Tournament>> => {
  const tournament = (await request.json()) as unknown as TournamentFm;
  tournamentSchema.parse(tournament);
  const result = await TournamentService.addTournament({
    name: tournament.name,
    description: tournament.description,
    matches: [],
  });
  return { ...tournament, _id: result.insertedId, matches: [] };
};

export { addTournament, onTournamentAdd };
