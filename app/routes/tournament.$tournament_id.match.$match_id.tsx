import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import { AggregationTable } from "~/components/molecules/AggregationTable";
import { MatchService } from "~/services/matchService.server";
import { matchToMatchAggregation } from "~/transformation/matchToMatchAggregation";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const matchId = params["match_id"];
  if (matchId === undefined) throw new Error("matchId not defined");

  const match = await MatchService.getMatchById(parseInt(matchId!));

  const aggregation = match && matchToMatchAggregation(match);

  return {
    aggregation,
  };
};

export default function MatchDetails() {
  const { aggregation } = useLoaderData<typeof loader>();

  return <>{aggregation && <AggregationTable aggregation={aggregation} />}</>;
}
