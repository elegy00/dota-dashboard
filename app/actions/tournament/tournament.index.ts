import type { ActionArgs } from "@remix-run/node";
import { deleteTournament, onTournamentDelete } from "./tournament.delete";
import type { ActionMethod } from "../types";
import { addTournament, onTournamentAdd } from "./tournament.add";

const path = "api/tournament";

export const tournamentActionCaller = {
  delete: deleteTournament({ method: "DELETE", path }),
  add: addTournament({ method: "POST", path }),
};

export const tournamentActionExecutor: {
  [key in ActionMethod]?: (arg: ActionArgs) => any;
} = {
  DELETE: onTournamentDelete,
  POST: onTournamentAdd,
};
