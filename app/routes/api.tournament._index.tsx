import type { ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { tournamentsActionExecutor } from "~/actions/tournaments/tournaments.index.server";
import type { ActionMethod } from "~/actions/types";

export const action = async (args: ActionFunctionArgs) => {
  const action = tournamentsActionExecutor[args.request.method as ActionMethod];
  if (action) {
    return action(args);
  } else {
    throw new Error(
      `Unhandled API call: ${args.request.method} ${args.request.url}`
    );
  }
};
