import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AggregationTable } from "~/components/molecules/AggregationTable";
import { TournamentService } from "~/services";
import { tournamentToByPlayersAggregation } from "~/transformation/tournamentToByPlayersAggregation";
import type { Aggregation } from "~/types/aggregation";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const tournamentId = params["tournament_id"];
  const viewId = params["view_id"];
  if (tournamentId === undefined) throw new Error("tournament_id not defined");

  const tournament = await TournamentService.getTournamentById(tournamentId);

  let aggregation: Aggregation | undefined;

  if (viewId === "tournamentByPlayers" && tournament) {
    aggregation = tournamentToByPlayersAggregation(tournament);
  }

  return json({
    aggregation,
  });
};

export default function ViewDetails() {
  const { aggregation } = useLoaderData<typeof loader>();

  return <>{aggregation && <AggregationTable aggregation={aggregation} />}</>;
}
