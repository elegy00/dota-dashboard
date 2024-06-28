import { AggregationValue } from "~/types/aggregation";

const round = (val: number) => Math.round(val * 10) / 10;

export function calcSumAndPercentage(values: AggregationValue[]) {
  const sum = round(
    values.reduce((sum, current) => sum + (current.value ?? 0), 0)
  );
  const avg = values.length >= 1 ? round(sum / values.length) : 0;
  return { sum, avg };
}
