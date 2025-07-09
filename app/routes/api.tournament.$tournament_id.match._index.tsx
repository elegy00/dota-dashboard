import type { ActionFunctionArgs } from "react-router"; // or cloudflare/deno
import { matchActionExecutor } from "~/actions/matches/match.index.server";
import type { ActionMethod } from "~/actions/types";

export const action = async (args: ActionFunctionArgs) => {
  const action = matchActionExecutor[args.request.method as ActionMethod];
  if (action) {
    return action(args);
  } else {
    throw new Error(
      `Unhandled API call: ${args.request.method} ${args.request.url}`
    );
  }
};
