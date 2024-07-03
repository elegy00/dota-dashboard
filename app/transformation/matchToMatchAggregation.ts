import type {
  Aggregation,
  AggregationEntry,
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import type { Match, Player } from "~/types/opendota";
import { playerKDACategory } from "./killDeathAssist";
import { heroToHeroImage } from "./heroToHeroImage";
import { playerWealthCategory } from "./wealth";
import { playerDmgCategory } from "./dmg";
import { playerSupportCategory } from "./support";
import { playerLastHitDeniesCategory } from "./lhdn";
import { playerName } from "~/util/playerName";
import { playerIdentifierBuilder } from "./identifierGroups";

export const matchToMatchAggregation = (match: Match): Aggregation => {
  return {
    type: "match",
    id: match.match_id.toString(),
    label: match.match_id.toString(),
    entries: match.players.map(playerToEntry),
  };
};

const playerToEntry = (player: Player, index: number): AggregationEntry => {
  return {
    hero: heroToHeroImage(player.hero_id),
    id: player.hero_id.toString(),
    categories: [
      playerKDACategory(playerIdentifierBuilder)([player]),
      playerWealthCategory(playerIdentifierBuilder)([player]),
      playerDmgCategory(playerIdentifierBuilder)([player]),
      playerSupportCategory(playerIdentifierBuilder)([player]),
      playerLastHitDeniesCategory(playerIdentifierBuilder)([player]),
    ],
    label: playerName(player),
  };
};
