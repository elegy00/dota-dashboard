import {
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import { Player } from "~/types/opendota";
import { IdentifierBuilder } from "./identifierGroups";

export const playerKDACategory =
  (identifierBuilder: IdentifierBuilder) =>
  (player: Player[]): AggregationValueCategory => {
    return {
      id: "kda",
      label: "",
      valueGroups: [
        playerKillValueGroup(player, identifierBuilder),
        playerDeathValueGroup(player, identifierBuilder),
        playerAssistValueGroup(player, identifierBuilder),
        playerKdaRatioValueGroup(player, identifierBuilder),
      ],
    };
  };

const playerKillValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "kills",
    label: "k",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.kills,
    })),
  };
};

const playerDeathValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "death",
    label: "d",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.deaths,
    })),
  };
};

const playerAssistValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "assist",
    label: "a",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.assists,
    })),
  };
};

const playerKdaRatioValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "kda",
    label: "kda",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.kda,
    })),
  };
};
