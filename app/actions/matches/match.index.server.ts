import type { ActionFunctionArgs } from "react-router";
import type { ActionMethod } from "../types";
import type { MatchUrlParams } from "./types";
import { onMatchDelete } from "./match.delete.server";
import { onMatchAdded } from "./match.add.server";

const path = (params: MatchUrlParams) =>
  `/api/tournament/${params.tournamentId}/match`;

export const matchActionExecutor: {
  [key in ActionMethod]?: (arg: ActionFunctionArgs) => any;
} = {
  DELETE: onMatchDelete,
  POST: onMatchAdded,
};
