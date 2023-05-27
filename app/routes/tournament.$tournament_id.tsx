import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { TournamentNav } from "~/components/templates/TournamentNav";
import { TournamentService } from "~/services";
import type { Match } from "~/types/opendota";
import * as styles from "../styles/tournament.css";

interface AddMatchForm {
  id: string;
}

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

export async function action({ request, params }: ActionArgs) {
  const body = await request.formData();
  var id = params["tournament_id"];
  if (id === undefined) {
    throw new Error("tournament_id not defined");
  }

  const bodyOb = Object.fromEntries(body) as unknown as AddMatchForm;

  const apiUrl = `https://api.opendota.com/api/matches/${bodyOb.id}`;
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

  return redirect(`./match/${match.match_id}`);
}

const Tournament = () => {
  const { tournament } = useLoaderData<typeof loader>();

  return (
    <main className={styles.root}>
      <aside>
        <TournamentNav tournament={tournament} />
      </aside>
      <Outlet />
    </main>
  );
};
export default Tournament;
