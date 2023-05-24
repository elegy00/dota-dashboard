import { ActionArgs, LoaderArgs, redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Match } from "~/types/opendota";
import gamemode from "dotaconstants/json/game_mode.json";
import { TournamentService } from "~/services";

export const loader = async ({ params }: LoaderArgs) => {
  console.log(params);
  // var tournaments = await TournamentService.getTournamentById(
  //   params["tournament_id"]
  // );

  return json({
    // tournaments,
  });
};

// export async function action({ request, context, params }: ActionArgs) {
//   // const body = await request.formData();
//   console.log(request);
//   const tournamentId = params["tournament_id"];
//   // if (request.method === "DELETE" && tournamentId) {
//   //   TournamentService.deleteTournament(tournamentId);
//   //   return 200;
//   // }

//   // const bodyOb = Object.fromEntries(body) as unknown as CreateTournamentForm;
//   // TournamentService.addTournament({ name: bodyOb.name });

//   // return redirect("/tournament");
// }

export default function Tournament() {
  const res = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Game which is cool</h1>
      {/* <div>{gamemode[res.game_mode.toString()].name}</div> */}
      {/* {posts.map((p) => (
        <div key={p.slug}>{p.title}</div>
      ))} */}
    </main>
  );
}
