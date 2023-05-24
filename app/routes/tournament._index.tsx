import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useCallback, useState } from "react";
import { TournamentService } from "~/services";
import type { Dto } from "~/types/base";
import type { Tournament } from "~/types/tournament";

export const loader = async () => {
  var tournaments = await TournamentService.getAllTournaments();
  return json({
    tournaments,
  });
};

export async function action({ request }: ActionArgs) {
  // const body = await request.formData();
  const bodyOb = (await request.json()) as Dto<{}>;

  TournamentService.deleteTournament(bodyOb._id);
  // return redirect("/tournament");
  return null;
}

export default function TournamentIndex() {
  const { tournaments } = useLoaderData<typeof loader>();
  const [removed, setRemoved] = useState<string[]>([]);

  const deleteTournament = useCallback(
    (t: Dto<Tournament>) => async () => {
      const res = confirm(`Delete ${t.name}?`);
      const payload: Dto<{}> = { _id: t._id };
      if (res) {
        const response = await fetch(`/tournament`, {
          method: "delete",
          body: JSON.stringify(payload),
        });
        response.status === 200 && setRemoved([...removed, t._id]);
      }
    },
    [removed]
  );

  return (
    <main>
      <h1>Tournament</h1>

      <Link to="/tournament/add">Create tournament</Link>
      <ul>
        {tournaments
          .filter((t) => !removed.includes(t._id))
          .map((p) => (
            <li key={p._id}>
              <Link to={`/tournament/${p._id}`}>{p.name}</Link>
              <button onClick={deleteTournament(p)}>DELETE</button>
            </li>
          ))}
      </ul>
    </main>
  );
}
