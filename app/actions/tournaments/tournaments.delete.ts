import type { ActionRoute } from "../types";

const deleteTournament =
  (route: ActionRoute<undefined>) => async (body: DeleteBody) =>
    fetch(route.path(undefined), {
      method: route.method,
      body: JSON.stringify(body),
    });

export { deleteTournament };

interface DeleteBody {
  id: string;
}
