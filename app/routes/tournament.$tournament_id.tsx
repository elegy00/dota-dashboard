import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Match } from "~/types/opendota";
import gamemode from "dotaconstants/json/game_mode.json";

export const loader = async ({ params }: LoaderArgs) => {
  //   return json(data);
  // return json({
  //   posts: [
  //     {
  //       slug: "my-first-post",
  //       title: "My First Post",
  //     },
  //     {
  //       slug: "90s-mixtape",
  //       title: "A Mixtape I Made Just For You",
  //     },
  //   ],
  // });
};

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
