import type { ActionArgs } from "@remix-run/node"; // or cloudflare/deno
import { tournamentsActionExecutor } from "~/actions/tournaments/tournaments.index";
import type { ActionMethod } from "~/actions/types";

export const action = async (args: ActionArgs) => {
  const action = tournamentsActionExecutor[args.request.method as ActionMethod];
  if (action) {
    return action(args);
  } else {
    throw new Error(
      `Unhandled API call: ${args.request.method} ${args.request.url}`
    );
  }
};
