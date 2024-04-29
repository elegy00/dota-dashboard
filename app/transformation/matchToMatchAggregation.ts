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
    categories: [playerKDACategory(player), playerWealthCategory(player)],
    label: player.personaname ?? `player ${index + 1}`,
  };
};

const playerWealthCategory = (player: Player): AggregationValueCategory => {
  return {
    id: "gold",
    label: "gold",
    valueGroups: [
      playerNetWorthTotal(player),
      playerGoldTotal(player),
      playerGpm(player),
    ],
  };
};
const playerGpm = (player: Player): AggregationValueGroup => {
  return {
    id: "gpm",
    label: "per minute",
    grouping: "sum",
    values: [{ id: "1", label: "", value: player.gold_per_min }],
  };
};

const playerNetWorthTotal = (player: Player): AggregationValueGroup => {
  return {
    id: "netWorth",
    label: "netWorth",
    grouping: "sum",
    values: [{ id: "1", label: "", value: player.net_worth }],
  };
};

const playerGoldTotal = (player: Player): AggregationValueGroup => {
  return {
    id: "goldTotal",
    label: "total",
    grouping: "sum",
    values: [{ id: "1", label: "", value: player.gold }],
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
