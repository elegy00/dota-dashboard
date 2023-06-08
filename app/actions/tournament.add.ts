import type { Params } from "@remix-run/router";
import { TournamentService } from "~/services";
import type { Match } from "~/types/opendota";

const addTournament = () => {};

const onTournamentAdd = async (
  request: Request,
  params: Params
): Promise<Match> => {
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

export const TournamentActions = {
  addTournament,
  onTournamentAdd,
};

interface AddMatchForm {
  id: string;
}
