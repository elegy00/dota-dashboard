import { ActionArgs, LoaderArgs, json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { TournamentService } from "~/services";
import type { Match } from "~/types/opendota";

interface AddMatchForm {
  id: string;
}

export const loader = async ({ params }: LoaderArgs) => {
  console.log(params);
  var id = params["tournament_id"];
  if (id === undefined) {
    throw new Error("tournament_id not defined");
  }
  var tournament = await TournamentService.getTournamentById(id);

  if (id === undefined) {
    throw new Error("tournament not found");
  }
  return json({
    tournament,
  });
};

export async function action({ request, params }: ActionArgs) {
  const body = await request.formData();
  var id = params["tournament_id"];
  if (id === undefined) {
    throw new Error("tournament_id not defined");
  }

  const bodyOb = Object.fromEntries(body) as unknown as AddMatchForm;

  const apiUrl = `https://api.opendota.com/api/matches/${bodyOb.id}`;
  const res = await fetch(apiUrl);
  if (res.status != 200) {
    throw new Error(`Fetch Game: ${res.status}:${res.statusText} `);
  }

  const match = (await res.json()) as Match;
  const tournament = await TournamentService.getTournamentById(id);
  if (tournament === null) {
    throw new Error("tournament not defined");
  }
  tournament?.matches.push(match);

  TournamentService.updateTournament(tournament);

  return null;
}

export default function Tournament() {
  const { tournament } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>{`Tournament ${tournament?.name}`}</h1>

      <h2>Add Match</h2>

      <Form method="post">
        <input type="number" name="id" />
        {/* <input type="submit" t */}
        <button>Create</button>
      </Form>

      <h2>Matches</h2>
      <ul>
        {tournament?.matches.map((match) => (
          <li key={match.match_id}>
            <Link to={`./${match.match_id}`}>
              <span>{match.match_id}</span>
              <span>:{new Date(match.start_time).toISOString()}</span>
            </Link>
            {/* <button onClick={deleteTournament(p)}>DELETE</button> */}
          </li>
        ))}
      </ul>
      {/* {tournament?.matches.map((match)=>)} */}
      {/* <div>{gamemode[res.game_mode.toString()].name}</div> */}
      {/* {posts.map((p) => (
        <div key={p.slug}>{p.title}</div>
      ))} */}
    </main>
  );
}
