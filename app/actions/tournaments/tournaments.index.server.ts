import type { ActionFunctionArgs } from "@remix-run/node";
import type { ActionMethod } from "../types";
import { onTournamentAdd } from "./tournaments.add.server";
import { onTournamentDelete } from "./tournaments.delete.server";

const path = () => "/api/tournament";

export const tournamentsActionExecutor: {
  [key in ActionMethod]?: (arg: ActionFunctionArgs) => any;
} = {
  DELETE: onTournamentDelete,
  POST: onTournamentAdd,
};
