import { Player } from "~/types/opendota";

export function playerName(player?: Player) {
  return (
    player?.name ??
    player?.personaname ??
    player?.account_id?.toString() ??
    `unknown player`
  );
}
