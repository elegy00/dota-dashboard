import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { TournamentsTemplate } from "~/components/templates/TournamentsTemplate";
import { TournamentService } from "~/services";
import type { Dto } from "~/types/base";

export const loader = async () => {
  var tournaments = await TournamentService.getAllTournaments();
  return json({
    tournaments,
  });
};

export async function action({ request }: ActionArgs) {
  const bodyOb = (await request.json()) as Dto<{}>;
  if (request.method === "DELETE") {
    TournamentService.deleteTournament(bodyOb._id);
  }
  return null;
}

export default function TournamentIndex() {
  const { tournaments } = useLoaderData<typeof loader>();

  return <TournamentsTemplate data={tournaments} />;
}
