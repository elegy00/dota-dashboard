import type { TournamentFm } from "~/validation/tournamentSchema";
import type { ActionRoute } from "../types";

const addTournament =
  (route: ActionRoute<undefined>) => async (body: TournamentFm) => {
    return await fetch(route.path(undefined), {
      method: route.method,
      body: JSON.stringify(body),
    });
  };

export { addTournament };
