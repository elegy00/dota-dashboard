interface Displayable {
  id: string;
  label: string;
}

export type AggregationType =
  | "match"
  | "tournamentByPlayers"
  | "tournamentByHeroes"
  | "tournamentByMatches";

export type AggregationGrouping = "sum" | "avg";

export interface Aggregation extends Displayable {
  type: AggregationType;
  entries: AggregationEntry[];
}

export interface AggregationEntry extends Displayable {
  hero: HeroImage | null;
  categories: AggregationValueCategory[];
}

export interface AggregationValueCategory extends Displayable {
  valueGroups: AggregationValueGroup[];
}

export interface AggregationValueGroup extends Displayable {
  grouping: AggregationGrouping;
  values: AggregationValue[];
}

export interface AggregationValue extends Displayable {
  value: number | null;
}

export interface HeroImage {
  name: string;
  heroImageUrl: string;
}
