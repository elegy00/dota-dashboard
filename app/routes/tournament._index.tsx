import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { onTournamentDelete } from "~/actions/tournament.delete";
// import { TournamentDeleteActions } from "~/actions/tournament.delete";
import { TournamentsTemplate } from "~/components/templates/TournamentsTemplate";
import { TournamentService } from "~/services";

export const loader = async () => {
  var tournaments = await TournamentService.getAllTournaments();
  return json({
    tournaments,
  });
};

export async function action({ request }: ActionArgs) {
  await onTournamentDelete(request);
  return null;
}

export default function TournamentIndex() {
  const { tournaments } = useLoaderData<typeof loader>();

  return <TournamentsTemplate data={tournaments as any} />;
}
