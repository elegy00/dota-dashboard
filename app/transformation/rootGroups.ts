import {
  AggregationLabel,
  AggregationLabelGroup,
  AggregationValue,
  AggregationValueCategory,
  AggregationValueGroup,
} from "~/types/aggregation";
import { Player } from "~/types/opendota";
import { playerName } from "~/util/playerName";
import { heroToHeroImage } from "./heroToHeroImage";

export const playersByHeroGroup = (
  players: Player[]
): AggregationValueGroup => {
  const countByPlayers = players.reduce<Record<number, number>>((acc, curr) => {
    if (!curr.account_id) {
      return acc;
    }
    if (acc[curr.account_id]) {
      return { ...acc, [curr.account_id]: acc[curr.account_id] + 1 };
    }
    return { ...acc, [curr.account_id]: +1 };
  }, {});

  return {
    id: "playersByHeroGroup",
    label: "playersByHeroGroup",
    values: Object.keys(countByPlayers).map<AggregationValue>((accId) => {
      // const pmatch = players.find((p) => p.account_id === accId);
      // console.log({ match: pmatch?.account_id, accId, players });
      return {
        id: accId,
        label: playerName(
          players.find((p) => p.account_id?.toString() === accId)
        ),
        value: countByPlayers[accId as unknown as number],
      };
    }),
  };
};

// const heroesByPlayersGroup = (players: Player[]): AggregationLabelGroup => {
//   return {
//     id: "heroesByPlayersGroup",
//     label: "heroesByPlayersGroup",
//     values: players.map((p, i) => ({
//       id: i.toString(),
//       label: heroToHeroImage(p.hero_id).name,
//       value: playerName(p),
//     })),
//   };
// };
