import type { MetaFunction } from "react-router";
import { useLoaderData } from "react-router";
import { TournamentsTemplate } from "~/components/templates/TournamentsTemplate";
import { TournamentService } from "~/services/tournamentService.server";
import { pageTitle } from "~/util/meta";

export const loader = async () => {
  const tournaments = await TournamentService.getAllTournaments();
  return {
    tournaments: tournaments.map((t) => ({ ...t, _id: t._id.toString() })),
  };
};

export const meta: MetaFunction = () => {
  return [{ title: pageTitle("tournaments") }];
};

export default function TournamentIndex() {
  const { tournaments } = useLoaderData<typeof loader>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <TournamentsTemplate data={tournaments as any} />;
}
