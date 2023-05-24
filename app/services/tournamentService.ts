import { MongoClient, ObjectId } from "mongodb";
import type { Tournament } from "~/types/tournament";

const getDatabaseConnection = () => {
  const uri = process.env.DB_CONNECTION ?? "";
  const client = new MongoClient(uri);
  return client.db("dota-dashboard");
};

const database = getDatabaseConnection();

const tournaments = database.collection<Tournament>("tournaments");

const TournamentService = {
  getAllTournaments: async () => {
    return await tournaments.find().toArray();
  },

  getTournamentById: async (id: string) => {
    const matches = await tournaments.find({ _id: new ObjectId(id) }).toArray();
    return matches.length > 0 ? matches[0] : null;
  },

  addTournament: async (tournament: Tournament) => {
    await tournaments.insertOne(tournament);
  },

  deleteTournament: async (id: string) => {
    return await tournaments.deleteOne({ _id: new ObjectId(id) });
  },
};

export { TournamentService };
