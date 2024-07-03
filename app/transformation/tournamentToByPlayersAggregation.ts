import type { Aggregation, AggregationEntry } from "~/types/aggregation";
import type { Match, Player } from "~/types/opendota";
import type { Tournament } from "~/types/tournament";
import type { WithId } from "~/util/mongodb.server";
import { playerName } from "~/util/playerName";
import { playerDmgCategory } from "./dmg";
import { heroIdentifierBuilder } from "./identifierGroups";
import { playerKDACategory } from "./killDeathAssist";
import { playerLastHitDeniesCategory } from "./lhdn";
import { playerSupportCategory } from "./support";
import { playerWealthCategory } from "./wealth";
import { playerWLCategory } from "./winLose";

export const tournamentToByPlayersAggregation = (
  tournament: WithId<Tournament>,
  matches: Match[]
): Aggregation => {
  const matchPlayers = matches.map((m) => m.players).flat();
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
  return {
    hero: null,
    id: (matchPlayers[0].account_id ?? index).toString(),
    categories: [
      playerWLCategory(heroIdentifierBuilder)(matchPlayers),
      playerKDACategory(heroIdentifierBuilder)(matchPlayers),
      playerWealthCategory(heroIdentifierBuilder)(matchPlayers),
      playerDmgCategory(heroIdentifierBuilder)(matchPlayers),
      playerSupportCategory(heroIdentifierBuilder)(matchPlayers),
      playerLastHitDeniesCategory(heroIdentifierBuilder)(matchPlayers),
    ],
    label: playerName(matchPlayers[0]),
  };
};
