import type { ActionArgs } from "@remix-run/node";
import { TournamentService } from "~/services";
import type { Dto } from "~/types/base";
import type { Match } from "~/types/opendota";
import type { Tournament } from "~/types/tournament";
import { matchSchema, type MatchFm } from "~/validation/matchSchema";
import type { ActionRoute } from "../types";
import type { MatchUrlParams } from "./types";

const addMatch =
  (route: ActionRoute<MatchUrlParams>) =>
  async (body: MatchFm, params: MatchUrlParams) => {
    return await fetch(route.path(params), {
      method: route.method,
      body: JSON.stringify(body),
    });
  };

const onMatchAdded = async ({
  request,
  params,
}: ActionArgs): Promise<Dto<Tournament>> => {
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

  // const result = await TournamentService.addTournament({
  //   name: tournament.name,
  //   description: tournament.description,
  //   matches: [],
  // });
  // return { ...tournament, _id: result.insertedId, matches: [] };
};

export { addMatch, onMatchAdded };
