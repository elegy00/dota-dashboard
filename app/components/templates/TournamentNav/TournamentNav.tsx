import { useNavigate } from "@remix-run/react";
import { useCallback, useState } from "react";
import { matchActionCaller } from "~/actions/matches/match.index";
import { Button } from "~/components/atoms/Button";
import { Link } from "~/components/atoms/Link/Link";
import { MatchForm } from "~/components/organism/MatchForm/MatchForm";
import type { Dto } from "~/types/base";
import type { Match } from "~/types/opendota";
import type { Tournament } from "~/types/tournament";
import type { MatchFm } from "~/validation/matchSchema";

interface Props {
  matchId?: string;
  viewId?: string;
  tournament: Dto<Tournament>;
}

const TournamentNav: React.FC<Props> = (props) => {
  const { tournament } = props;
  const navigate = useNavigate();
  const [added, setAdded] = useState(new Date());

  const onSubmit = useCallback(
    async (match: MatchFm) => {
      if (!tournament) {
        return;
      }
      const res = await matchActionCaller.add(match, {
        tournamentId: tournament._id,
      });

      if (res.status === 200) {
        (await res.json()) as unknown as Dto<Tournament>;
        setAdded(new Date());
        return navigate(`./match/${match.matchId}?changed=true`);
      }
    },
    [navigate, tournament]
  );

  const deleteMatchT = useCallback(
    (m: Match) => async () => {
      const res = confirm(`Delete ${m.match_id}?`);
      if (res) {
        const response = await matchActionCaller.delete(
          {
            id: m.match_id,
          },
          { tournamentId: tournament._id }
        );
        response.ok && navigate(`/tournament/${tournament._id}?changed=true`);
      }
    },
    [navigate, tournament._id]
  );

  return (
    <>
      <h2>Add Match</h2>

      <MatchForm onSubmit={onSubmit} key={added.getTime()} />

      <h2>Matches</h2>
      <ul>
        {tournament?.matches.map((match) => (
          <li key={match.match_id}>
            <Link to={`./match/${match.match_id}`}>
              <span>{match.match_id}</span>
              <span>:{new Date(match.start_time).toISOString()}</span>
            </Link>
            <Button variant="secondary" onClick={deleteMatchT(match)}>
              DELETE
            </Button>
          </li>
        ))}
      </ul>
      
    </>
  );
};

export { TournamentNav };
