import type { ActionArgs } from "@remix-run/node";
import type { ActionMethod } from "../types";
import { addMatch, onMatchAdded } from "./match.add";
import type { MatchUrlParams } from "./types";

const path = (params: MatchUrlParams) =>
  `/api/tournament/${params.tournamentId}/match`;

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
