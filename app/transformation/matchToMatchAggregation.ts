import type {
  Aggregation,
  AggregationEntry,
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import type { Match, Player } from "~/types/opendota";
import { heroToHeroImage } from "./heroToHeroImage";

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
    categories: [playerKDACategory(player)],
    label: player.personaname ?? `player ${index + 1}`,
  };
};

const playerKDACategory = (player: Player): AggregationValueCategory => {
  return {
    id: "kda",
    label: "",
    valueGroups: [
      playerKillValueGroup(player),
      playerDeathValueGroup(player),
      playerAssistValueGroup(player),
    ],
  };
};

const playerKillValueGroup = (player: Player): AggregationValueGroup => {
  return {
    id: "kill",
    label: "k",
    grouping: "sum",
    values: [{ id: "1", label: "K", value: player.kills }],
  };
};

const playerDeathValueGroup = (player: Player): AggregationValueGroup => {
  return {
    id: "death",
    label: "d",
    grouping: "sum",
    values: [{ id: "1", label: "D", value: player.deaths }],
  };
};

const playerAssistValueGroup = (player: Player): AggregationValueGroup => {
  return {
    id: "assist",
    label: "a",
    grouping: "sum",
    values: [{ id: "1", label: "D", value: player.assists }],
  };
};
