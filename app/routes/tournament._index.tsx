import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useCallback, useState } from "react";
import { Tournaments } from "~/components/templates/tournaments";
import { TournamentService } from "~/services";
import type { Dto } from "~/types/base";
import type { Tournament } from "~/types/tournament";

export const loader = async () => {
  var tournaments = await TournamentService.getAllTournaments();
  return json({
    tournaments,
  });
};

export async function action({ request }: ActionArgs) {
  const bodyOb = (await request.json()) as Dto<{}>;

  TournamentService.deleteTournament(bodyOb._id);
  return null;
}

export default function TournamentIndex() {
  const { tournaments } = useLoaderData<typeof loader>();

  return <Tournaments data={tournaments} />;
}
