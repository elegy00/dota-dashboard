import {
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import { Player } from "~/types/opendota";
import { IdentifierBuilder, heroIdentifierBuilder } from "./identifierGroups";

export const playerWLCategory =
  (identifierBuilder: IdentifierBuilder) =>
  (player: Player[]): AggregationValueCategory => {
    return {
      id: "wl",
      label: "",
      valueGroups: [
        playerGameValueGroup(player, identifierBuilder),
        playerWinValueGroup(player, identifierBuilder),
        playerLoseValueGroup(player, identifierBuilder),
      ],
    };
  };

const playerGameValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "games",
    label: "t",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: 1,
    })),
  };
};

const playerWinValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "win",
    label: "w",
    values: players.map((p, i) => ({
      ...identifierBuilder(p),
      value: p.win,
    })),
  };
};
const playerLoseValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "lose",
    label: "l",
    values: players.map((p, i) => ({
      ...identifierBuilder(p),
      value: p.lose,
    })),
  };
};
