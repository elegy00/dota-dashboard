import { Match } from "~/types/opendota";
import { database } from "./database.server";

const matches = database.collection<Match>("match");

/**
 * Only select part of the match from the DB
 */
const matchProjection = { match_id: 1, start_time: 1, players: 1 };

const getMatchById = async (id: number) => {
  const matchResult = await matches
    .find({ match_id: id }, { projection: matchProjection })
    .toArray();
  return matchResult[0] ?? null;
};

const MatchService = {
  getMatchById,

  getMatchesByIds: async (id: number[]) => {
    const matchResult = await matches
      .find({ match_id: { $in: id } }, { projection: matchProjection })
      .toArray();
    return matchResult;
  },

  addMatch: async (match: Match) => {
    const existingMatch = await getMatchById(match.match_id);
    if (existingMatch) {
      matches.replaceOne({ _id: existingMatch._id }, match);
      return match;
    }
    return await matches.insertOne(match);
  },

  deleteMatch: async (id: number) => {
    return await matches.deleteOne({ match_id: id });
  },
};

export { MatchService };
