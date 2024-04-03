export interface Match {
  match_id: number;
  barracks_status_dire: number;
  barracks_status_radiant: number;
  chat: null;
  cluster: number;
  cosmetics: null;
  dire_score: number;
  dire_team_id: null;
  draft_timings: null;
  duration: number;
  engine: number;
  first_blood_time: number;
  game_mode: number;
  human_players: number;
  leagueid: number;
  lobby_type: number;
  match_seq_num: number;
  negative_votes: number;
  objectives: null;
  picks_bans: null;
  positive_votes: number;
  radiant_gold_adv: null;
  radiant_score: number;
  radiant_team_id: null;
  radiant_win: boolean;
  radiant_xp_adv: null;
  skill: null;
  start_time: number;
  teamfights: null;
  tower_status_dire: number;
  tower_status_radiant: number;
  version: null;
  replay_salt: number;
  series_id: number;
  series_type: number;
  players: Player[];
  patch: number;
  region: number;
  replay_url: string;
}

export interface Player {
  match_id: number;
  player_slot: number;
  ability_targets: null;
  ability_upgrades_arr?: number[];
  ability_uses: null;
  account_id?: number;
  actions: null;
  additional_units: null;
  assists: number;
  backpack_0: number;
  backpack_1: number;
  backpack_2: number;
  backpack_3: null;
  buyback_log: null;
  camps_stacked: null;
  connection_log: null;
  creeps_stacked: null;
  damage: null;
  damage_inflictor: null;
  damage_inflictor_received: null;
  damage_taken: null;
  damage_targets: null;
  deaths: number;
  denies: number;
  dn_t: null;
  firstblood_claimed: null;
  gold: number;
  gold_per_min: number;
  gold_reasons: null;
  gold_spent: number;
  gold_t: null;
  hero_damage: number;
  hero_healing: number;
  hero_hits: null;
  hero_id: number;
  item_0: number;
  item_1: number;
  item_2: number;
  item_3: number;
  item_4: number;
  item_5: number;
  item_neutral: number;
  item_uses: null;
  kill_streaks: null;
  killed: null;
  killed_by: null;
  kills: number;
  kills_log: null;
  lane_pos: null;
  last_hits: number;
  leaver_status?: number;
  level: number;
  lh_t: null;
  life_state: null;
  max_hero_hit: null;
  multi_kills: null;
  net_worth: number;
  obs: null;
  obs_left_log: null;
  obs_log: null;
  obs_placed: null;
  party_id?: number;
  party_size: number;
  performance_others: null;
  permanent_buffs: null[];
  pings: null;
  pred_vict: null;
  purchase: null;
  purchase_log: null;
  randomed: null;
  repicked: null;
  roshans_killed: null;
  rune_pickups: null;
  runes: null;
  runes_log: null;
  sen: null;
  sen_left_log: null;
  sen_log: null;
  sen_placed: null;
  stuns: null;
  teamfight_participation: null;
  times: null;
  tower_damage: number;
  towers_killed: null;
  xp_per_min: number;
  xp_reasons: null;
  xp_t: null;
  personaname?: string;
  name: null;
  last_login: null;
  radiant_win: boolean;
  start_time: number;
  duration: number;
  cluster: number;
  lobby_type: number;
  game_mode: number;
  is_contributor: boolean;
  patch: number;
  region: number;
  isRadiant: boolean;
  win: number;
  lose: number;
  total_gold: number;
  total_xp: number;
  kda: number;
  abandons: number;
  rank_tier: null;
  is_subscriber: boolean;
  cosmetics: null[];
  benchmarks: Benchmarks;
  kills_per_min?: number;
}

export interface Benchmarks {
  gold_per_min: GoldPerMin;
  xp_per_min: XpPerMin;
  kills_per_min: KillsPerMin;
  last_hits_per_min: LastHitsPerMin;
  hero_damage_per_min: HeroDamagePerMin;
  hero_healing_per_min: HeroHealingPerMin;
  tower_damage: TowerDamage;
  stuns_per_min: StunsPerMin;
  lhten: Lhten;
}

export interface GoldPerMin {
  raw: number;
  pct: number;
}

export interface XpPerMin {
  raw: number;
  pct: number;
}

export interface KillsPerMin {
  raw: number;
  pct: number;
}

export interface LastHitsPerMin {
  raw: number;
  pct: number;
}

export interface HeroDamagePerMin {
  raw: number;
  pct: number;
}

export interface HeroHealingPerMin {
  raw: number;
  pct: number;
}

export interface TowerDamage {
  raw: number;
  pct: number;
}

export interface StunsPerMin {
  raw: number;
  pct: number;
}

export interface Lhten {}
