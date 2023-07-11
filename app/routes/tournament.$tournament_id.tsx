import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { ShouldRevalidateFunction } from "@remix-run/react";
import { Outlet, useLoaderData } from "@remix-run/react";
import { TournamentNav } from "~/components/templates/TournamentNav";
import { TournamentService } from "~/services";
import { pageTitle } from "~/util/meta";

// interface AddMatchForm {
//   id: string;
// }

export const loader = async ({ params }: LoaderArgs) => {
  var id = params["tournament_id"];
  if (id === undefined) {
    throw new Error("tournament_id not defined");
  }
  var tournament = await TournamentService.getTournamentById(id);

  if (id === undefined) {
    throw new Error("tournament not found");
  }
  return json({
    tournament,
  });
};

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: pageTitle("tournament", data?.tournament?.name) }];
};

const Tournament = () => {
  const { tournament } = useLoaderData<typeof loader>();

  return (
    <main>
      <aside>
        <TournamentNav tournament={tournament} />
      </aside>
      <Outlet />
    </main>
  );
};
export default Tournament;
