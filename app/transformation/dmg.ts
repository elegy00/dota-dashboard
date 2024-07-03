import {
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import { Player } from "~/types/opendota";
import { IdentifierBuilder } from "./identifierGroups";

export const playerDmgCategory =
  (identifierBuilder: IdentifierBuilder) =>
  (player: Player[]): AggregationValueCategory => {
    return {
      id: "dmg",
      label: "dmg",
      valueGroups: [
        playerDmgValueGroup(player, identifierBuilder),
        playerTowerValueGroup(player, identifierBuilder),
        playerHealValueGroup(player, identifierBuilder),
        playerDmgTakenValueGroup(player, identifierBuilder),
      ],
    };
  };

const playerDmgValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "h_dmg",
    label: "hero",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.hero_damage,
    })),
  };
};

const playerTowerValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "t_dmg",
    label: "tower",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.tower_damage,
    })),
  };
};

const playerHealValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "heal",
    label: "heal",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.hero_healing,
    })),
  };
};

const playerDmgTakenValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "taken",
    label: "taken",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: Object.values(p.damage_taken).reduce((acc, curr) => acc + curr, 0),
    })),
  };
};
