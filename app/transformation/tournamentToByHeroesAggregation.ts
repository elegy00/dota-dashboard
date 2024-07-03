import type { WithId } from "~/util/mongodb.server";
import type { Aggregation, AggregationEntry } from "~/types/aggregation";
import type { Match, Player } from "~/types/opendota";
import type { Tournament } from "~/types/tournament";
import { playerKDACategory } from "./killDeathAssist";
import { playerWLCategory } from "./winLose";
import { playerWealthCategory } from "./wealth";
import { playerDmgCategory } from "./dmg";
import { playerSupportCategory } from "./support";
import { playerLastHitDeniesCategory } from "./lhdn";
import { heroToHeroImage } from "./heroToHeroImage";

export const tournamentToByHeroesAggregation = (
  tournament: WithId<Tournament>,
  matches: Match[]
): Aggregation => {
  const matchPlayers = matches.map((m) => m.players).flat();
  const hero_ids = [...new Set(matchPlayers.map((p) => p.hero_id))];
  // const playersTotal = [...new Set(heroes)] as number[];

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
      playerWLCategory(matchPlayers),
      playerKDACategory(matchPlayers),
      playerWealthCategory(matchPlayers),
      playerDmgCategory(matchPlayers),
      playerSupportCategory(matchPlayers),
      playerLastHitDeniesCategory(matchPlayers),
    ],
    label: hero.name,
  };
};
