import type { ActionFunctionArgs } from "@remix-run/node";
import { TournamentService } from "~/services/index.server";
import type { Dto } from "~/types/base";
import type { Match } from "~/types/opendota";
import type { Tournament } from "~/types/tournament";
import { matchSchema, type MatchFm } from "~/validation/matchSchema";
import type { ActionRoute } from "../types";
import type { MatchUrlParams } from "./types";

const onMatchAdded = async ({
  request,
  params,
}: ActionFunctionArgs): Promise<Dto<Tournament>> => {
  var id = params["tournament_id"];
  if (id === undefined) {
    throw new Error("tournament_id not defined");
  }

  const matchForm = (await request.json()) as unknown as MatchFm;
  matchSchema.parse(matchForm);
  const apiUrl = `https://api.opendota.com/api/matches/${matchForm.matchId}`;
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
  return { ...tournament, _id: tournament._id.toString() };
};

export { onMatchAdded };
