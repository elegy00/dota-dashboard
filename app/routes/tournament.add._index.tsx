import { useNavigate } from "@remix-run/react";
import { useCallback } from "react";
import { tournamentActionCaller } from "~/actions/tournament/tournament.index";
import { TournamentForm } from "~/components/organism/TournamentForm/TournamentForm";
import type { TournamentFm } from "~/validation/tournamentSchema";

export default function Tournament() {
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (tournament: TournamentFm) => {
      const res = await tournamentActionCaller.add(tournament);
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
