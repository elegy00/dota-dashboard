interface Displayable {
  id: string;
  label: string;
}

export type AggregationType =
  | "match"
  | "tournamentByPlayers"
  | "tournamentByHeroes"
  | "tournamentByMatches";

export interface Aggregation extends Displayable {
  type: AggregationType;
  entries: AggregationEntry[];
}

export interface AggregationEntry extends Displayable {
  hero: HeroImage | null;
  categories: AggregationValueCategory[];
  rootBreakdown: AggregationValueGroup | null;
}

export interface AggregationValueCategory extends Displayable {
  valueGroups: AggregationValueGroup[];
}

export interface AggregationValueGroup extends Displayable {
  values: AggregationValue[];
}

export interface AggregationLabelGroup extends Displayable {
  values: AggregationLabel[];
}

export type AggregationValue = AggregationBase<number>;
export type AggregationLabel = AggregationBase<string>;

export interface AggregationBase<T> extends Displayable {
  value: T | null;
}

export interface HeroImage {
  name: string;
  heroImageUrl: string;
}
