import { AggregationValue } from "~/types/aggregation";
import { Player } from "~/types/opendota";
import { playerName } from "~/util/playerName";
import { heroToHeroImage } from "./heroToHeroImage";

export type IdentifierBuilder = (
  player: Player
) => Pick<AggregationValue, "id" | "label">;

export const playerIdentifierBuilder: IdentifierBuilder = (player: Player) => {
  return {
    id: player.account_id?.toString() ?? "no account id found",
    label: playerName(player),
  };
};

export const heroIdentifierBuilder: IdentifierBuilder = (player: Player) => {
  return {
    id: player.hero_id?.toString() ?? "no hero id found",
    label: heroToHeroImage(player.hero_id).name,
  };
};
