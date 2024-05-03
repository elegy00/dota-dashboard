import type { ActionFunctionArgs } from "@remix-run/node";
import { TournamentService } from "~/services/index.server";
import type { ActionRoute } from "../types";
import { DeleteBody } from "./types";

const onMatchDelete = async ({ request, params }: ActionFunctionArgs) => {
  var id = params["tournament_id"];
  if (id === undefined) {
    throw new Error("tournament_id not defined");
  }
  const bodyOb = (await request.json()) as DeleteBody;

  const tournament = await TournamentService.getTournamentById(id);
  if (tournament === null) {
    throw new Error("tournament not defined");
  }
  var matches = tournament.matches.filter((m) => m.match_id !== bodyOb.id);
  var updatedTournament = { ...tournament, matches };
  TournamentService.updateTournament(updatedTournament);

  return { ...tournament, _id: tournament._id.toString() };
};

export { onMatchDelete };
