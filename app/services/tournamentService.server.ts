import type { WithId } from "mongodb";
import type { Tournament } from "~/types/tournament";
import { ObjectId } from "~/util/mongodb.server";
import { database } from "./database.server";

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
    return await tournaments.insertOne(tournament);
  },

  updateTournament: async (tournament: WithId<Tournament>) => {
    await tournaments.replaceOne({ _id: tournament._id }, tournament);
  },

  deleteTournament: async (id: string) => {
    return await tournaments.deleteOne({ _id: new ObjectId(id) });
  },
};

export { TournamentService };
