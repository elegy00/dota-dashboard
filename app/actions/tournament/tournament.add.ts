import type { ActionArgs } from "@remix-run/node";
import { TournamentService } from "~/services";
import type { Match } from "~/types/opendota";
import type { ActionRoute } from "../types";

const addTournament = (route: ActionRoute) => async (body: AddMatchForm) =>
  fetch(route.path, {
    method: route.method,
    body: JSON.stringify(body),
  });

const onTournamentAdded = async ({
  request,
  params,
}: ActionArgs): Promise<Match> => {
  const body = await request.formData();
  var id = params["tournament_id"];
  if (id === undefined) {
    throw new Error("tournament_id not defined");
  }

  const bodyOb = Object.fromEntries(body) as unknown as AddMatchForm;

  const apiUrl = `https://api.opendota.com/api/matches/${bodyOb.id}`;
  const res = await fetch(apiUrl);
  if (res.status != 200) {
    throw new Error(`Fetch Game: ${res.status}:${res.statusText} `);
  }

  const match = (await res.json()) as Match;
  const tournament = await TournamentService.getTournamentById(id);
  if (tournament === null) {
    throw new Error("tournament not defined");
  }
  if (!tournament.matches.some((m) => m.match_id === match.match_id)) {
    tournament.matches.push(match);
    TournamentService.updateTournament(tournament);
  }
  return match;
};

export { addTournament, onTournamentAdded as onTournamentAdd };

interface AddMatchForm {
  id: string;
}
