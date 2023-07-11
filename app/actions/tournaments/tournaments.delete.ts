import type { ActionArgs } from "@remix-run/node";
import { TournamentService } from "~/services";
import type { ActionRoute } from "../types";

const deleteTournament =
  (route: ActionRoute<undefined>) => async (body: DeleteBody) =>
    fetch(route.path(undefined), {
      method: route.method,
      body: JSON.stringify(body),
    });

const onTournamentDelete = async ({ request }: ActionArgs) => {
  const bodyOb = (await request.json()) as DeleteBody;
  return TournamentService.deleteTournament(bodyOb.id);
};

export { deleteTournament, onTournamentDelete };

interface DeleteBody {
  id: string;
}
