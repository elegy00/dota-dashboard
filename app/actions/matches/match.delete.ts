import type { ActionArgs } from "@remix-run/node";
import { TournamentService } from "~/services";
import type { ActionRoute } from "../types";

const deleteMatch =
  <T>(route: ActionRoute<T>) =>
  async (body: DeleteBody, params: T) =>
    fetch(route.path(params), {
      method: route.method,
      body: JSON.stringify(body),
    });

const onMatchDelete = async ({ request, params }: ActionArgs) => {
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

export { deleteMatch, onMatchDelete };

interface DeleteBody {
  id: number;
}
