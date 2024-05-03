import type { ActionFunctionArgs } from "@remix-run/node";
import { TournamentService } from "~/services/index.server";

const onTournamentDelete = async ({ request }: ActionFunctionArgs) => {
  const bodyOb = (await request.json()) as DeleteBody;
  return TournamentService.deleteTournament(bodyOb.id);
};

export { onTournamentDelete };

export interface DeleteBody {
  id: string;
}
