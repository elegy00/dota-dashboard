import {
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import { Player } from "~/types/opendota";

export const playerSupportCategory = (
  player: Player[]
): AggregationValueCategory => {
  return {
    id: "sup",
    label: "sup",
    valueGroups: [
      playerObsPlacedValueGroup(player),
      playerSentriesPlacedValueGroup(player),
      playerCampsStackedValueGroup(player),
      playerCreepsStackedValueGroup(player),
    ],
  };
};

const playerObsPlacedValueGroup = (
  players: Player[]
): AggregationValueGroup => {
  return {
    id: "obs_placed",
    label: "Observer placed",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "obs_placed",
      value: p.obs_placed,
    })),
  };
};

const playerSentriesPlacedValueGroup = (
  players: Player[]
): AggregationValueGroup => {
  return {
    id: "sent_placed",
    label: "Sentries placed",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "sent_placed",
      value: p.sen_placed,
    })),
  };
};

const playerCampsStackedValueGroup = (
  players: Player[]
): AggregationValueGroup => {
  return {
    id: "camps_stacked",
    label: "Camps stacked",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "camps_stacked",
      value: p.camps_stacked,
    })),
  };
};

const playerCreepsStackedValueGroup = (
  players: Player[]
): AggregationValueGroup => {
  return {
    id: "creeps_stacked",
    label: "Creeps stacked",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "creeps_stacked",
      value: p.creeps_stacked,
    })),
  };
};
