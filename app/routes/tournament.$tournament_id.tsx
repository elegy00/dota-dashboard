import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { ShouldRevalidateFunction } from "@remix-run/react";
import { Outlet, useLoaderData } from "@remix-run/react";
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
    throw new Error("tournament not found");
  }
  return json({
    tournament,
    matches,
  });
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
