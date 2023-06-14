import type { ActionArgs } from "@remix-run/node"; // or cloudflare/deno
import { tournamentActionExecutor } from "~/actions/tournament/tournament.index";
import type { ActionMethod } from "~/actions/types";

export const action = async (args: ActionArgs) => {
  const action = tournamentActionExecutor[args.request.method as ActionMethod];
  if (action) {
    return action(args);
  } else {
    throw new Error(
      `Unhandled API call: ${args.request.method} ${args.request.url}`
    );
  }
  // onTournamentDelete(request);
  // switch (request.method) {
  //   case "POST": {
  //     /* handle "POST" */
  //   }
  //   case "PUT": {
  //     /* handle "PUT" */
  //   }
  //   case "PATCH": {
  //     /* handle "PATCH" */
  //   }
  //   case "DELETE": {
  //     /* handle "DELETE" */
  //   }
  // }
  // return null;
};
