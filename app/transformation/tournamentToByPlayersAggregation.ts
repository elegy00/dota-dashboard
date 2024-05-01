import type { WithId } from "mongodb";
import type { Aggregation, AggregationEntry } from "~/types/aggregation";
import type { Player } from "~/types/opendota";
import type { Tournament } from "~/types/tournament";
import { playerKDACategory, playerWLCategory } from "./base";

export const tournamentToByPlayersAggregation = (
  tournament: WithId<Tournament>
): Aggregation => {
  const matchPlayers = tournament.matches.map((m) => m.players).flat();
  const playersTotal = [
    ...new Set(matchPlayers.map((p) => p.account_id).filter((p) => p)),
  ] as number[];

  const playersRecord = playersTotal.reduce<Record<number, Player[]>>(
    (dict, account_id) => {
      return {
        ...dict,
        [account_id]: matchPlayers.filter((mp) => mp.account_id === account_id),
      };
    },
    {}
  );

  return {
    type: "tournamentByPlayers",
    id: tournament._id.toString(),
    label: tournament.name,
    entries: Object.values(playersRecord).map(playerToEntry),
  };
};

const playerToEntry = (
  matchPlayers: Player[],
  index: number
): AggregationEntry => {
  const summedStats = sumMatchPlayerStats(matchPlayers);
  return {
    hero: null,
    id: (matchPlayers[0].account_id ?? index).toString(),
    categories: [playerWLCategory(summedStats), playerKDACategory(summedStats)],
    label: matchPlayers[0].personaname ?? `player ${index + 1}`,
  };
};

const sumMatchPlayerStats = (matchPlayers: Player[]): Player => {
  return matchPlayers.reduce<Player>((sum, current, index) => {
    if (index === 0) {
      return sum;
    }
    return {
      ...sum,
      kills: sum.kills + current.kills,
      deaths: sum.deaths + current.deaths,
      assists: sum.assists + current.assists,
      win: sum.win + current.win,
      lose: sum.lose + current.lose,
    };
  }, matchPlayers[0]);
};
