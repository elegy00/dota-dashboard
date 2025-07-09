import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import type { ShouldRevalidateFunction } from "react-router";
import { Outlet, useLoaderData } from "react-router";
import { TournamentNav } from "~/components/templates/TournamentNav";
import { TournamentService } from "~/services/index.server";
import { MatchService } from "~/services/matchService.server";
import { pageTitle } from "~/util/meta";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const id = params["tournament_id"];
  if (id === undefined) {
    throw new Error("tournament_id not defined");
  }
  const tournament = await TournamentService.getTournamentById(id);
  const matches = await MatchService.getMatchesByIds(
    tournament?.match_ids ?? []
  );

  if (id === undefined) {
    return { authorized: false };
  }
  return {
    tournament: tournament
      ? { ...tournament, _id: tournament._id.toString() }
      : null,
    matches: matches.map((m) => ({ ...m, _id: m._id.toString() })),
  };
};

export const shouldRevalidate: ShouldRevalidateFunction = ({ nextUrl }) => {
  return nextUrl.searchParams.get("changed") === "true";
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: pageTitle("tournament", data?.tournament?.name) }];
};

const Tournament = () => {
  const { tournament, matches } = useLoaderData<typeof loader>();

  return (
    <main>
      <aside>
        {tournament && (
          <TournamentNav tournament={tournament} matches={matches} />
        )}
      </aside>
      <Outlet />
    </main>
  );
};
export default Tournament;
