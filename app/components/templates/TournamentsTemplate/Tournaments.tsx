import { Link } from "@remix-run/react";
import { useCallback, useState } from "react";
import type { Data, Dto } from "~/types/base";
import type { Tournament } from "~/types/tournament";

type Props = Data<Dto<Tournament>[]>;

const TournamentsTemplate: React.FC<Props> = (props) => {
  const { data } = props;
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
        {data
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
};

export { TournamentsTemplate };
