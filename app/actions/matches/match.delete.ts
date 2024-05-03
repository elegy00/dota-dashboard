import type { ActionFunctionArgs } from "@remix-run/node";
import { TournamentService } from "~/services/index.server";
import type { ActionRoute } from "../types";
import { DeleteBody } from "./types";

const deleteMatch =
  <T>(route: ActionRoute<T>) =>
  async (body: DeleteBody, params: T) =>
    fetch(route.path(params), {
      method: route.method,
      body: JSON.stringify(body),
    });

export { deleteMatch };
