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
