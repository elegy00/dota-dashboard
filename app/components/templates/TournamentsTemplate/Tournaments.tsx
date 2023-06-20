import { useCallback, useState } from "react";
import { tournamentsActionCaller } from "~/actions/tournaments/tournaments.index";
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
        const response = await tournamentsActionCaller.delete({
          id: t._id,
        });
        const index = currentData.findIndex((d) => d._id === t._id);

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
      <h1>Tournaments</h1>

      <Link to="/tournament/add" className="mt-4">
        Create tournament
      </Link>
      <ul className="space-y-2">
        {currentData.map((p) => (
          <li key={p._id} className="space-x-2 flex justify-between max-w-lg">
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
