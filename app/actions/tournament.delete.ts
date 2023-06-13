import { TournamentService } from "~/services";

const deleteTournament = async (body: DeleteBody) =>
  fetch(`/api/tournament`, {
    method: "delete",
    body: JSON.stringify(body),
  });

const onTournamentDelete = async (request: Request) => {
  const bodyOb = (await request.json()) as DeleteBody;
  if (request.method === "DELETE") {
    return TournamentService.deleteTournament(bodyOb.id);
  }
};

export { deleteTournament, onTournamentDelete };

interface DeleteBody {
  id: string;
}
