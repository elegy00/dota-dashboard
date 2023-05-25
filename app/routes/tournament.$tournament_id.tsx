import { ActionArgs, LoaderArgs, redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Match } from "~/types/opendota";
import gamemode from "dotaconstants/json/game_mode.json";
import { TournamentService } from "~/services";

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

export default function Tournament() {
  const { tournament } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>{`Tournament ${tournament?.name}`}</h1>
      {/* <div>{gamemode[res.game_mode.toString()].name}</div> */}
      {/* {posts.map((p) => (
        <div key={p.slug}>{p.title}</div>
      ))} */}
    </main>
  );
}
