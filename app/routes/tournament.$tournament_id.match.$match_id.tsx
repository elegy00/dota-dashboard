import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AggregationTable } from "~/components/molecules/AggregationTable";
import { TournamentService } from "~/services";
import { matchToMatchAggregation } from "~/transformation/matchToMatchAggregation";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const tournamentId = params["tournament_id"];
  const matchId = params["match_id"];
  if (tournamentId === undefined) throw new Error("tournament_id not defined");
  if (matchId === undefined) throw new Error("matchId not defined");

  const tournament = await TournamentService.getTournamentById(tournamentId);
  const match = tournament?.matches.find(
    (m) => m.match_id === parseInt(matchId!)
  );

  const aggregation = match && matchToMatchAggregation(match);

  return json({
    aggregation,
  });
};

export default function MatchDetails() {
  const { aggregation } = useLoaderData<typeof loader>();

  return <>{aggregation && <AggregationTable aggregation={aggregation} />}</>;
}
