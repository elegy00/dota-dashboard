import { useNavigate } from "@remix-run/react";
import { useCallback } from "react";
import { matchActionCaller } from "~/actions/matches/match.index";
import { Link } from "~/components/atoms/Link/Link";
import { MatchForm } from "~/components/organism/MatchForm/MatchForm";
import type { Dto } from "~/types/base";
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
        return navigate(`./match/${match.matchId}?added=true`);
      }
    },
    [navigate, tournament]
  );

  return (
    <>
      <h2>Add Match</h2>

      <MatchForm onSubmit={onSubmit} />

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
