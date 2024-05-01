import {
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import { Player } from "~/types/opendota";

export const playerKDACategory = (
  player: Player[]
): AggregationValueCategory => {
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

const playerKillValueGroup = (players: Player[]): AggregationValueGroup => {
  return {
    id: "kills",
    label: "k",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "K",
      value: p.kills,
    })),
  };
};

const playerDeathValueGroup = (players: Player[]): AggregationValueGroup => {
  return {
    id: "death",
    label: "d",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "w",
      value: p.deaths,
    })),
  };
};

const playerAssistValueGroup = (players: Player[]): AggregationValueGroup => {
  return {
    id: "assist",
    label: "a",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "w",
      value: p.assists,
    })),
  };
};
