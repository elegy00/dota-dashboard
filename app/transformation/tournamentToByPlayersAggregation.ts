import type {
  Aggregation,
  AggregationEntry,
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import type { Player } from "~/types/opendota";
import type { Tournament } from "~/types/tournament";
import { heroToHeroImage } from "./heroToHeroImage";
import type { WithId } from "mongodb";

export const tournamentToByPlayersAggregation = (
  tournament: WithId<Tournament>
): Aggregation => {
  var playersTotal = new Set(
    tournament.matches
      .map((m) => m.players)
      .flat()
      .map((p) => p.account_id)
      .filter((p) => p)
  );

  console.log({ playersTotal });

  return {
    type: "match",
    id: tournament._id.toString(),
    label: tournament.name,
    entries: [],
    // entries: match.players.map(playerToEntry),
  };
};

const playerToEntry = (player: Player, index: number): AggregationEntry => {
  return {
    hero: heroToHeroImage(player.hero_id),
    id: player.hero_id.toString(),
    categories: [playerKDACategory(player)],
    label: player.personaname ?? `player ${index + 1}`,
  };
};

const playerKDACategory = (player: Player): AggregationValueCategory => {
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
