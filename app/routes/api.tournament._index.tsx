import type { ActionArgs } from "@remix-run/node"; // or cloudflare/deno
import { onTournamentDelete } from "~/actions/tournament.delete";

export const action = async ({ request }: ActionArgs) => {
  onTournamentDelete(request);
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
  return null;
};
