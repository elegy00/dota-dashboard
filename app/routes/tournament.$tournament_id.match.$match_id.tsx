import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Fragment } from "react";
import { TournamentService } from "~/services";
import heroesData from "dotaconstants/build/heroes.json";

export const loader = async ({ params }: LoaderArgs) => {
  var tournamentId = params["tournament_id"];
  var matchId = params["match_id"];
  if (tournamentId === undefined) throw new Error("tournament_id not defined");
  if (matchId === undefined) throw new Error("matchId not defined");

  var tournament = await TournamentService.getTournamentById(tournamentId);
  var match = tournament?.matches.find(
    (m) => m.match_id === parseInt(matchId!)
  );
  const heroIds = match?.players.map((p) => p.hero_id);

  var heroes = Object.values(heroesData)
    .filter((hd) => heroIds?.includes(hd.id))
    .map((hero) => {
      // const hero = heroes.find((h) => h.id === p.hero_id);
      const hName = hero?.name.substring("npc_dota_hero_".length);
      return {
        ...hero,
        imgPath: `http://cdn.dota2.com/apps/dota2/images/heroes/${hName}_full.png`,
      };
    });

  return json({
    match,
    heroes,
  });
};

export default function MatchDetails() {
  const { match, heroes } = useLoaderData<typeof loader>();

  return (
    <>
      <h3>Players</h3>
      <div className="grid grid-cols-2 gap-2" key={match?.match_id}>
        {match?.players.map((p) => {
          const hero = heroes.find((h) => h.id === p.hero_id);
          return (
            <Fragment key={p.account_id}>
              <div>{p.personaname ?? p.account_id}</div>
              <div className="">
                {hero && (
                  <img
                    alt={hero.localized_name}
                    className="object-cover w-40 p-1 border-2 border-grey-300 rounded-md"
                    src={hero.imgPath}
                  />
                )}
              </div>
            </Fragment>
          );
        })}
      </div>
      <div className="mt-20" style={{ whiteSpace: "pre" }}>
        {JSON.stringify(match, null, 2)}
      </div>
    </>
  );
}
