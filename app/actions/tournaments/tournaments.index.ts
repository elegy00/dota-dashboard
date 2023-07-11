import type { ActionArgs } from "@remix-run/node";
import { deleteTournament, onTournamentDelete } from "./tournaments.delete";
import type { ActionMethod } from "../types";
import { addTournament, onTournamentAdd } from "./tournaments.add";

const path = () => "/api/tournament";

export const tournamentsActionCaller = {
  delete: deleteTournament({ method: "DELETE", path }),
  add: addTournament({ method: "POST", path }),
};

export const tournamentsActionExecutor: {
  [key in ActionMethod]?: (arg: ActionArgs) => any;
} = {
  DELETE: onTournamentDelete,
  POST: onTournamentAdd,
};
