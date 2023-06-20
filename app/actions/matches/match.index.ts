import type { ActionArgs } from "@remix-run/node";
import type { ActionMethod } from "../types";
import { addMatch, onMatchAdded } from "./match.add";

const path = (tournamentId: string) => `/api/tournament/${tournamentId}/match`;

export const matchActionCaller = {
  // delete: deleteTournament({ method: "DELETE", path }),
  add: addMatch({ method: "POST", path }),
};

export const matchActionExecutor: {
  [key in ActionMethod]?: (arg: ActionArgs) => any;
} = {
  // DELETE: onTournamentDelete,
  POST: onMatchAdded,
};
