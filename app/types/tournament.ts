import type { Match } from "./opendota";

export interface Tournament {
  name: string;
  matches: Match[];
}
