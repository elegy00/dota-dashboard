import { ActionArgs, json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { MongoClient } from "./../util/mongodb.server";
import { v4 as uuidv4 } from "uuid";

const uri = process.env.DB_CONNECTION ?? "";

interface CreateTournamentForm {
  name: string;
}

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  try {
    const client = new MongoClient(uri);
    const bodyOb = Object.fromEntries(body) as unknown as CreateTournamentForm;
    // console.log({ bodyOb });
    const database = client.db("test-1");
    const tournaments = database.collection("tournaments");
    await tournaments.insertOne({ name: bodyOb.name, games: [] });
    console.log(await tournaments.find().toArray());
  } catch (e) {
    console.log(e);
  }

  // const project = await createProject(body);
  // return redirect(`/projects/${project.id}`);
  return redirect("/tournament");
}

export const loader = async () => {
  return json({
    posts: [
      {
        slug: "my-first-post",
        title: "My First Post",
      },
      {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You",
      },
    ],
  });
};

export default function Tournament() {
  // const { posts } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Add Tournament</h1>

      <Form method="post">
        <input type="text" name="name" />
        {/* <input type="submit" t */}
      </Form>
    </main>
  );
}
