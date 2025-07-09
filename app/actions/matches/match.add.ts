import type { ActionFunctionArgs } from "react-router";
import { TournamentService } from "~/services/index.server";
import type { Dto } from "~/types/base";
import type { Match } from "~/types/opendota";
import type { Tournament } from "~/types/tournament";
import { matchSchema, type MatchFm } from "~/validation/matchSchema";
import type { ActionRoute } from "../types";
import type { MatchUrlParams } from "./types";

const addMatch =
  (route: ActionRoute<MatchUrlParams>) =>
  async (body: MatchFm, params: MatchUrlParams) => {
    return await fetch(route.path(params), {
      method: route.method,
      body: JSON.stringify(body),
    });
  };

export { addMatch };
