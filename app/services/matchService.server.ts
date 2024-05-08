import { Match } from "~/types/opendota";
import { MongoClient } from "~/util/mongodb.server";

const getDatabaseConnection = () => {
  !process && console.log("NO PROCESS");
  const uri = process.env.DB_CONNECTION ?? "";
  const client = new MongoClient(uri);
  return client.db("dota-dashboard");
};

const database = getDatabaseConnection();

const matches = database.collection<Match>("match");

const getMatchById = async (id: number) => {
  const matchResult = await matches.find({ match_id: id }).toArray();
  return matchResult[0] ?? null;
};

const MatchService = {
  getMatchById,

  getMatchesByIds: async (id: number[]) => {
    console.log(id);
    const matchResult = await matches.find({ match_id: { $in: id } }).toArray();
    return matchResult;
  },

  addMatch: async (match: Match) => {
    const existingMatch = await getMatchById(match.match_id);
    if (existingMatch) {
      return existingMatch;
    }
    return await matches.insertOne(match);
  },

  deleteMatch: async (id: number) => {
    return await matches.deleteOne({ match_id: id });
  },
};

export { MatchService };
