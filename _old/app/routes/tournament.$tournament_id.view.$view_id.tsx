import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { TournamentService } from "~/services";

export const loader = async ({ params }: LoaderArgs) => {
  var tournamentId = params["tournament_id"];
  var viewId = params["view_id"];
  if (tournamentId === undefined) throw new Error("tournament_id not defined");
  if (viewId === undefined) throw new Error("viewId not defined");

  var tournament = await TournamentService.getTournamentById(tournamentId);
  // var match = tournament?.matches.find(
  //   (m) => m.match_id === parseInt(matchId!)
  // );

  return json({
    viewId,
    // match,
  });
};

export default function ViewDetails() {
  const { viewId } = useLoaderData<typeof loader>();

  return <div>{`SOME VIEW ${viewId}`}</div>;
}
