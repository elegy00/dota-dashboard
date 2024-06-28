import {
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import { Player } from "~/types/opendota";

export const playerWealthCategory = (
  players: Player[]
): AggregationValueCategory => {
  return {
    id: "gold",
    label: "gold",
    valueGroups: [
      playerNetWorthTotal(players),
      // playerGoldTotal(players),
      playerGpm(players),
    ],
  };
};
const playerGpm = (players: Player[]): AggregationValueGroup => {
  return {
    id: "gpm",
    label: "per minute",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "w",
      value: p.gold_per_min,
    })),
  };
};

const playerNetWorthTotal = (players: Player[]): AggregationValueGroup => {
  return {
    id: "netWorth",
    label: "netWorth",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "w",
      value: p.net_worth,
    })),
  };
};

const playerGoldTotal = (players: Player[]): AggregationValueGroup => {
  return {
    id: "goldTotal",
    label: "total",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "w",
      value: p.gold,
    })),
  };
};
