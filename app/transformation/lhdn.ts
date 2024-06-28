import {
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import { Player } from "~/types/opendota";

export const playerLastHitDeniesCategory = (
  player: Player[]
): AggregationValueCategory => {
  return {
    id: "lhdn",
    label: "lh/dn",
    valueGroups: [playerLHValueGroup(player), playerDenyValueGroup(player)],
  };
};

const playerLHValueGroup = (players: Player[]): AggregationValueGroup => {
  return {
    id: "lasthit",
    label: "lh",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "lh",
      value: p.last_hits,
    })),
  };
};
const playerDenyValueGroup = (players: Player[]): AggregationValueGroup => {
  return {
    id: "deny",
    label: "deny",
    values: players.map((p, i) => ({
      id: i.toString(),
      label: "deny",
      value: p.denies,
    })),
  };
};
