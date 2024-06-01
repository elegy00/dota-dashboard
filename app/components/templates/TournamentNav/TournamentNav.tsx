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
  matches: Dto<Match>[];
}

const TournamentNav: React.FC<Props> = (props) => {
  const { tournament, matches } = props;
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

  const intl = new Intl.DateTimeFormat("de-CH", {
    dateStyle: "medium",
    timeStyle: "medium",
    timeZone: "CET",
  });

  const sortedMatches = matches.sort(
    (a, b) =>
      new Date(b.start_time * 1000).getTime() -
      new Date(a.start_time * 1000).getTime()
  );
  return (
    <>
      <h2>Add Match</h2>

      <MatchForm onSubmit={onSubmit} key={added.getTime()} />

      <h2>Matches</h2>
      <ul className="space-y-2">
        {sortedMatches.map((match) => (
          <li key={match.match_id} className="flex space-x-4 items-baseline">
            <Link to={`./match/${match.match_id}`} className="space-x-2">
              <span>{intl.format(new Date(match.start_time * 1000))}</span>
            </Link>

            <Button variant="secondary" onClick={deleteMatchT(match)}>
              DELETE
            </Button>

            <a
              href={`https://api.opendota.com/api/matches/${match.match_id}`}
              target="_blank"
              className="text-green-500 underline underline-offset-4 hover:text-green-600 duration-150 text-xs"
              referrerPolicy="no-referrer"
            >
              raw data
            </a>
            <a
              href={`https://www.dotabuff.com/matches/${match.match_id}`}
              target="_blank"
              className="text-green-500 underline underline-offset-4 hover:text-green-600 duration-150 text-xs"
              referrerPolicy="no-referrer"
            >
              dotabuff
            </a>
          </li>
        ))}
      </ul>
      <h2>Views</h2>
      <ul>
        <li>
          <Link to={`./view/tournamentByPlayers`}>Data grouped by players</Link>
        </li>
        {/* <li>
          <Link to={`./view/tournamentByHeroes`}>tournamentByHeroes</Link>
        </li>
        <li>
          <Link to={`./view/tournamentByMatches`}>tournamentByMatches</Link>
        </li> */}
      </ul>
    </>
  );
};

export { TournamentNav };
