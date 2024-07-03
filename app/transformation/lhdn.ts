import {
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import { Player } from "~/types/opendota";
import { IdentifierBuilder } from "./identifierGroups";

export const playerLastHitDeniesCategory =
  (identifierBuilder: IdentifierBuilder) =>
  (player: Player[]): AggregationValueCategory => {
    return {
      id: "lhdn",
      label: "lh/dn",
      valueGroups: [
        playerLHValueGroup(player, identifierBuilder),
        playerDenyValueGroup(player, identifierBuilder),
      ],
    };
  };

const playerLHValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "lasthit",
    label: "lh",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.last_hits,
    })),
  };
};
const playerDenyValueGroup = (
  players: Player[],
  identifierBuilder: IdentifierBuilder
): AggregationValueGroup => {
  return {
    id: "deny",
    label: "deny",
    values: players.map((p) => ({
      ...identifierBuilder(p),
      value: p.denies,
    })),
  };
};
