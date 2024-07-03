import {
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import { Player } from "~/types/opendota";
import { IdentifierBuilder } from "./identifierGroups";

export const playerWealthCategory =
  (identifierBuilder: IdentifierBuilder) =>
  (players: Player[]): AggregationValueCategory => {
    return {
      id: "gold",
      label: "gold",
      valueGroups: [
        playerNetWorthTotal(players, identifierBuilder),
        // playerGoldTotal(players,identifierBuilder),
        playerGpm(players, identifierBuilder),
      ],
    };
  };
const playerGpm = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "gpm",
    label: "per minute",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.gold_per_min,
    })),
  };
};

const playerNetWorthTotal = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "netWorth",
    label: "netWorth",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.net_worth,
    })),
  };
};

const playerGoldTotal = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "goldTotal",
    label: "total",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.gold,
    })),
  };
};
