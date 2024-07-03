import type { Aggregation, AggregationEntry } from "~/types/aggregation";
import type { Match, Player } from "~/types/opendota";
import type { Tournament } from "~/types/tournament";
import type { WithId } from "~/util/mongodb.server";
import { playerDmgCategory } from "./dmg";
import { heroToHeroImage } from "./heroToHeroImage";
import { playerIdentifierBuilder } from "./identifierGroups";
import { playerKDACategory } from "./killDeathAssist";
import { playerLastHitDeniesCategory } from "./lhdn";
import { playerSupportCategory } from "./support";
import { playerWealthCategory } from "./wealth";
import { playerWLCategory } from "./winLose";

export const tournamentToByHeroesAggregation = (
  tournament: WithId<Tournament>,
  matches: Match[]
): Aggregation => {
  const matchPlayers = matches.map((m) => m.players).flat();
  const hero_ids = [...new Set(matchPlayers.map((p) => p.hero_id))];

  const playersRecord = hero_ids.reduce<Record<number, Player[]>>(
    (dict, hero_id) => {
      return {
        ...dict,
        [hero_id]: matchPlayers.filter((mp) => mp.hero_id === hero_id),
      };
    },
    {}
  );

  return {
    type: "tournamentByHeroes",
    id: tournament._id.toString(),
    label: tournament.name,
    entries: Object.values(playersRecord).map(playerToEntry),
  };
};

const playerToEntry = (
  matchPlayers: Player[],
  index: number
): AggregationEntry => {
  const hero = heroToHeroImage(matchPlayers[0].hero_id);
  return {
    hero: hero,
    id: (matchPlayers[0].hero_id ?? index).toString(),
    categories: [
      playerWLCategory(playerIdentifierBuilder)(matchPlayers),
      playerKDACategory(playerIdentifierBuilder)(matchPlayers),
      playerWealthCategory(playerIdentifierBuilder)(matchPlayers),
      playerDmgCategory(playerIdentifierBuilder)(matchPlayers),
      playerSupportCategory(playerIdentifierBuilder)(matchPlayers),
      playerLastHitDeniesCategory(playerIdentifierBuilder)(matchPlayers),
    ],
    label: hero.name,
  };
};
