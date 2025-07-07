import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import { AggregationTable } from "~/components/molecules/AggregationTable";
import { TournamentService } from "~/services/index.server";
import { MatchService } from "~/services/matchService.server";
import { tournamentToByHeroesAggregation } from "~/transformation/tournamentToByHeroesAggregation";
import { tournamentToByPlayersAggregation } from "~/transformation/tournamentToByPlayersAggregation";
import type { Aggregation, AggregationType } from "~/types/aggregation";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const tournamentId = params["tournament_id"];
  const viewId = params["view_id"] as AggregationType;
  if (tournamentId === undefined) throw new Error("tournament_id not defined");

  const tournament = await TournamentService.getTournamentById(tournamentId);
  const matches = await MatchService.getMatchesByIds(
    tournament?.match_ids ?? []
  );

  let aggregation: Aggregation | undefined;

  if (viewId === "tournamentByPlayers" && tournament && matches) {
    aggregation = tournamentToByPlayersAggregation(tournament, matches);
  } else if (viewId === "tournamentByHeroes" && tournament && matches) {
    aggregation = tournamentToByHeroesAggregation(tournament, matches);
  }

  return {
    aggregation,
  };
};

export default function ViewDetails() {
  const { aggregation } = useLoaderData<typeof loader>();

  return <>{aggregation && <AggregationTable aggregation={aggregation} />}</>;
}
