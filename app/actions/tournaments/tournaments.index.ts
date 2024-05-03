import { addTournament } from "./tournaments.add";
import { deleteTournament } from "./tournaments.delete";

const path = () => "/api/tournament";

export const tournamentsActionCaller = {
  delete: deleteTournament({ method: "DELETE", path }),
  add: addTournament({ method: "POST", path }),
};
