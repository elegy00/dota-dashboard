import { Form } from "@remix-run/react";
import { useCallback, useState } from "react";
import { Button } from "~/components/atoms/Button";
import { TrashIcon } from "~/components/atoms/Icons";
import { Link } from "~/components/atoms/Link/Link";
import type { Data, Dto } from "~/types/base";
import type { Match } from "~/types/opendota";
import type { Tournament } from "~/types/tournament";

interface Props extends Data<Dto<Tournament>> {
  matchId?: string;
  viewId?: string;
  tournament?: Dto<Tournament>;
}

const TournamentNav: React.FC<Props> = (props) => {
  const { tournament } = props;
  const [currentMatches, setCurrentMatches] = useState(
    tournament?.matches ?? []
  );

  const deleteTournament = useCallback(
    (t: Match) => async () => {
      const res = confirm(`Delete ${t.match_id}?`);
      const payload = { match_id: t.match_id };
      if (res) {
        const response = await fetch(`/tournament`, {
          method: "delete",
          body: JSON.stringify(payload),
        });

        const index = currentMatches.indexOf(t);
        const updated = [...currentMatches];
        if (index !== -1) {
          updated.splice(index, 1);
        }
        response.status === 200 && setCurrentMatches(updated);
      }
    },
    [currentMatches]
  );

  return (
    <>
      <h2>Add Match</h2>

      <Form method="post">
        <input type="number" name="id" />
        {/* <input type="submit" t */}
        <Button variant="primary">Add</Button>
      </Form>

      {/*
      <h2>Views</h2>
      <ul>
        {[1, 2].map((view) => (
          <li key={view}>
            <Link to={`./view/${view}`}>
              <span>{view}</span>
            </Link>
          </li>
        ))}
      </ul> */}

      <h2>Matches</h2>
      <ul>
        {tournament?.matches.map((match) => (
          <li key={match.match_id}>
            <Link to={`./match/${match.match_id}`}>
              <span>{match.match_id}</span>
              <span>:{new Date(match.start_time).toISOString()}</span>
            </Link>
            <Button variant="secondary" onClick={deleteTournament(match)}>
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export { TournamentNav };
