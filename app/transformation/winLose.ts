import {
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import { Player } from "~/types/opendota";

export const playerWLCategory = (
  player: Player[]
): AggregationValueCategory => {
  return {
    id: "wl",
    label: "",
    valueGroups: [playerWinValueGroup(player), playerLoseValueGroup(player)],
  };
};

const playerWinValueGroup = (players: Player[]): AggregationValueGroup => {
  return {
    id: "win",
    label: "w",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "W",
      value: p.win,
    })),
  };
};
const playerLoseValueGroup = (players: Player[]): AggregationValueGroup => {
  return {
    id: "lose",
    label: "l",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "L",
      value: p.lose,
    })),
  };
};
