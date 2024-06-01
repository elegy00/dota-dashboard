import { AggregationValue } from "~/types/aggregation";

export function calcSumAndPercentage(values: AggregationValue[]) {
  const sum = values.reduce((sum, current) => sum + (current.value ?? 0), 0);
  const avg =
    values.length >= 1 ? Math.round((sum * 10) / values.length) / 10 : 0;
  return { sum, avg };
}
