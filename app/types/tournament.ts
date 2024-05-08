import type { Match } from "./opendota";

export interface Tournament {
  name: string;
  description?: string;
  // matches: Match[];
  match_ids: number[];
}
