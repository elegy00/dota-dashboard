import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { MongoClient } from "~/util/mongodb.server";
// import { MongoClient } from "mongodb";
// import { MongoClient } from "mongodb";

export const loader = async () => {
  const uri = process.env.DB_CONNECTION ?? "";
  console.log("asdf", uri);

  const client = new MongoClient(uri);
  // console.log({ bodyOb });
  const database = client.db("test-1");
  const tournColl = database.collection<{
    name: string;
    // id: string;
  }>("tournaments");
  var tournaments = await tournColl.find().toArray();

  return json({
    tournaments,
  });
};

export default function Tournament() {
  const { tournaments } = useLoaderData<typeof loader>();

  console.log({ tournaments });
  return (
    <main>
      <h1>Tournament</h1>

      <Link to="/tournament/add">Create tournament</Link>
      <ul>
        {tournaments.map((p) => (
          <li key={p._id}>
            <Link to={`/tournament/${p._id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
