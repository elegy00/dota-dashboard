import { Form, Link } from "@remix-run/react";
import { Button } from "~/components/atoms/Button";
import type { Data, Dto } from "~/types/base";
import type { Tournament } from "~/types/tournament";

interface Props extends Data<Dto<Tournament>> {
  matchId?: string;
  viewId?: string;
  tournament?: Dto<Tournament>;
}

const TournamentNav: React.FC<Props> = (props) => {
  const { tournament } = props;

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
          </li>
        ))}
      </ul>
    </>
  );
};

export { TournamentNav };
