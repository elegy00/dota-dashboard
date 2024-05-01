import {
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import { Player } from "~/types/opendota";

export const playerKDACategory = (player: Player): AggregationValueCategory => {
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

export const playerWLCategory = (player: Player): AggregationValueCategory => {
  return {
    id: "wl",
    label: "",
    valueGroups: [playerWinValueGroup(player), playerLoseValueGroup(player)],
  };
};

const playerWinValueGroup = (player: Player): AggregationValueGroup => {
  return {
    id: "win",
    label: "w",
    grouping: "sum",
    values: [{ id: "1", label: "w", value: player.win }],
  };
};
const playerLoseValueGroup = (player: Player): AggregationValueGroup => {
  return {
    id: "lose",
    label: "l",
    grouping: "sum",
    values: [{ id: "1", label: "L", value: player.lose }],
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
