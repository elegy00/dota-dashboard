import type { V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { TournamentsTemplate } from "~/components/templates/TournamentsTemplate";
import { TournamentService } from "~/services";
import { pageTitle } from "~/util/meta";

export const loader = async () => {
  var tournaments = await TournamentService.getAllTournaments();
  return json({
    tournaments,
  });
};

export const meta: V2_MetaFunction = () => {
  return [{ title: pageTitle("tournaments") }];
};

export default function TournamentIndex() {
  const { tournaments } = useLoaderData<typeof loader>();

  return <TournamentsTemplate data={tournaments as any} />;
}
