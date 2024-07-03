import {
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import { Player } from "~/types/opendota";
import { IdentifierBuilder } from "./identifierGroups";

export const playerSupportCategory =
  (identifierBuilder: IdentifierBuilder) =>
  (player: Player[]): AggregationValueCategory => {
    return {
      id: "sup",
      label: "sup",
      valueGroups: [
        playerObsPlacedValueGroup(player, identifierBuilder),
        playerSentriesPlacedValueGroup(player, identifierBuilder),
        playerCampsStackedValueGroup(player, identifierBuilder),
        playerCreepsStackedValueGroup(player, identifierBuilder),
      ],
    };
  };

const playerObsPlacedValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "obs_placed",
    label: "Observer placed",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.obs_placed,
    })),
  };
};

const playerSentriesPlacedValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "sent_placed",
    label: "Sentries placed",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.sen_placed,
    })),
  };
};

const playerCampsStackedValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "camps_stacked",
    label: "Camps stacked",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.camps_stacked,
    })),
  };
};

const playerCreepsStackedValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "creeps_stacked",
    label: "Creeps stacked",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.creeps_stacked,
    })),
  };
};
