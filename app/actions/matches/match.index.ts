import { addMatch } from "./match.add";
import { deleteMatch } from "./match.delete";
import type { MatchUrlParams } from "./types";

const path = (params: MatchUrlParams) =>
  `/api/tournament/${params.tournamentId}/match`;

export const matchActionCaller = {
  delete: deleteMatch({ method: "DELETE", path }),
  add: addMatch({ method: "POST", path }),
};
