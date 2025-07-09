import type { ActionFunctionArgs } from "react-router";
import { TournamentService } from "~/services/index.server";
import type { Tournament } from "~/types/tournament";
import type { WithId } from "~/util/mongodb.server";
import type { TournamentFm } from "~/validation/tournamentSchema";
import { tournamentSchema } from "~/validation/tournamentSchema";

const onTournamentAdd = async ({
  request,
}: ActionFunctionArgs): Promise<WithId<Tournament>> => {
  const tournament = (await request.json()) as unknown as TournamentFm;
  tournamentSchema.parse(tournament);
  const result = await TournamentService.addTournament({
    name: tournament.name,
    description: tournament.description,
    match_ids: [],
  });
  return { ...tournament, _id: result.insertedId, match_ids: [] };
};

export { onTournamentAdd };
