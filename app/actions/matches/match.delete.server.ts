import type { ActionFunctionArgs } from "@remix-run/node";
import { TournamentService } from "~/services/index.server";
import type { ActionRoute } from "../types";
import { DeleteBody } from "./types";
import { Tournament } from "~/types/tournament";
import { WithId } from "mongodb";

const onMatchDelete = async ({ request, params }: ActionFunctionArgs) => {
  const id = params["tournament_id"];
  if (id === undefined) {
    throw new Error("tournament_id not defined");
  }
  const bodyOb = (await request.json()) as DeleteBody;

  const tournament = await TournamentService.getTournamentById(id);
  if (tournament === null) {
    throw new Error("tournament not defined");
  }
  const match_ids = tournament.match_ids.filter((m) => m !== bodyOb.id);
  const updatedTournament: WithId<Tournament> = { ...tournament, match_ids };
  TournamentService.updateTournament(updatedTournament);

  return { ...tournament };
};

export { onMatchDelete };
