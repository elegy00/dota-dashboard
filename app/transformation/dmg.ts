import {
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import { Player } from "~/types/opendota";

export const playerDmgCategory = (
  player: Player[]
): AggregationValueCategory => {
  return {
    id: "dmg",
    label: "dmg",
    valueGroups: [
      playerDmgValueGroup(player),
      playerTowerValueGroup(player),
      playerHealValueGroup(player),
    ],
  };
};

const playerDmgValueGroup = (players: Player[]): AggregationValueGroup => {
  return {
    id: "h_dmg",
    label: "hero",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "hero_dmg",
      value: p.hero_damage,
    })),
  };
};

const playerTowerValueGroup = (players: Player[]): AggregationValueGroup => {
  return {
    id: "t_dmg",
    label: "tower",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "tower",
      value: p.tower_damage,
    })),
  };
};

const playerHealValueGroup = (players: Player[]): AggregationValueGroup => {
  return {
    id: "heal",
    label: "heal",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "heal",
      value: p.hero_healing,
    })),
  };
};
