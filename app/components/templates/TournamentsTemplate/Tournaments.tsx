import { useCallback, useState } from "react";
import { deleteTournament } from "~/actions/tournament.delete";
import { Button } from "~/components/atoms/Button";
import { Link } from "~/components/atoms/Link";
import type { Data, Dto } from "~/types/base";
import type { Tournament } from "~/types/tournament";

type Props = Data<Dto<Tournament>[]>;

const TournamentsTemplate: React.FC<Props> = (props) => {
  const { data } = props;
  const [currentData, setCurrentData] = useState(data);

  const deleteT = useCallback(
    (t: Dto<Tournament>) => async () => {
      const res = confirm(`Delete ${t.name}?`);
      if (res) {
        const response = await deleteTournament({
          id: t._id,
        });

        const index = currentData.indexOf(t);
        const updated = [...currentData];
        if (index !== -1) {
          updated.splice(index, 1);
        }
        response.status === 200 && setCurrentData(updated);
      }
    },
    [currentData]
  );

  return (
    <main>
      <h1>Tournament</h1>

      <Link to="/tournament/add">Create tournament</Link>
      <ul>
        {data.map((p) => (
          <li key={p._id}>
            <Link to={`/tournament/${p._id}`}>{p.name}</Link>
            <Button variant="secondary" onClick={deleteT(p)}>
              DELETE
            </Button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export { TournamentsTemplate };
