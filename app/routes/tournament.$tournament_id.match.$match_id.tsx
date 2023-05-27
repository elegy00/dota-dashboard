import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { TournamentService } from "~/services";

export const loader = async ({ params }: LoaderArgs) => {
  var tournamentId = params["tournament_id"];
  var matchId = params["match_id"];
  if (tournamentId === undefined) throw new Error("tournament_id not defined");
  if (matchId === undefined) throw new Error("matchId not defined");

  var tournament = await TournamentService.getTournamentById(tournamentId);
  var match = tournament?.matches.find(
    (m) => m.match_id === parseInt(matchId!)
  );

  return json({
    match,
  });
};

export default function MatchDetails() {
  const { match } = useLoaderData<typeof loader>();

  return <div>{JSON.stringify(match, null, 2)}</div>;
}
