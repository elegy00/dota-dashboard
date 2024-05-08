import { MongoClient } from "~/util/mongodb.server";

export const getDatabaseConnection = () => {
  !process && console.log("NO PROCESS");
  const uri = process.env.DB_CONNECTION ?? "";
  const client = new MongoClient(uri);
  return client.db("dota-dashboard");
};

export const database = getDatabaseConnection();
