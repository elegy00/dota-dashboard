import heroesData from "dotaconstants/build/heroes.json";
import type { HeroImage } from "~/types/aggregation";

const heroToHeroImage = (hero_id: number): HeroImage => {
  // const heroIds = match?.players.map((p) => p.hero_id);

  var hero = Object.values(heroesData)
    // .filter((hd) => heroIds?.includes(hd.id))
    .find((hd) => hero_id === hd.id);

  const name = hero?.name.substring("npc_dota_hero_".length) ?? "";
  const heroImageUrl = `https://cdn.dota2.com/apps/dota2/images/heroes/${name}_full.png`;

  return { heroImageUrl, name };
};

export { heroToHeroImage };
