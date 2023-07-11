import type { V2_MetaFunction } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
import { useCallback } from "react";
import { tournamentsActionCaller } from "~/actions/tournaments/tournaments.index";
import { TournamentForm } from "~/components/organism/TournamentForm/TournamentForm";
import { pageTitle } from "~/util/meta";
import type { TournamentFm } from "~/validation/tournamentSchema";

export const meta: V2_MetaFunction = () => {
  return [{ title: pageTitle("add tournament") }];
};

export default function Tournament() {
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (tournament: TournamentFm) => {
      const res = await tournamentsActionCaller.add(tournament);
      if (res.status === 200) {
        return navigate("/tournament");
      }
    },
    [navigate]
  );

  return (
    <main>
      <h1>Add Tournament</h1>

      <TournamentForm onSubmit={onSubmit} />
    </main>
  );
}
