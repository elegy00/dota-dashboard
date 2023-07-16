import heroesData from "dotaconstants/build/heroes.json";
import type { HeroImage } from "~/types/aggregation";

const heroToHeroImage = (hero_id: number): HeroImage => {
  var hero = Object.values(heroesData).find((hd) => hero_id === hd.id);

  const name = hero?.name.substring("npc_dota_hero_".length) ?? "";
  const heroImageUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${name}.png`;
  return { heroImageUrl, name };
};

export { heroToHeroImage };
