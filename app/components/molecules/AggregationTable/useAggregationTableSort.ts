import { useCallback, useMemo, useState } from "react";
import { Aggregation, AggregationEntry } from "~/types/aggregation";
import { AggregationEntryRow } from "./AggregationEntryRow";
import { calcSumAndPercentage } from "~/util/calc";

type SortDir = "asc" | "desc";
type AggType = "sum" | "avg";

interface Sort {
  catId: string;
  valueId: string;
  sortDir: SortDir;
  agg: AggType;
}

const initSort: Pick<Sort, "sortDir" | "agg"> = { sortDir: "desc", agg: "sum" };

const getValuesForEntry = (entry: AggregationEntry, sort: Sort) => {
  const group = entry.categories.find((c) => c.id === sort.catId);
  const values =
    group?.valueGroups.find((c) => c.id === sort.valueId)?.values ?? [];
  const calced = calcSumAndPercentage(values);
  return sort.agg === "sum" ? calced.sum : calced.avg;
};

export function useAggregationTableSort(aggregation: Aggregation) {
  const [sort, setSort] = useState<Sort>({
    catId: aggregation.entries[0]?.categories[0]?.id,
    valueId: aggregation.entries[0]?.categories[0]?.valueGroups[0]?.id,
    ...initSort,
  });

  const sorted = useMemo(() => {
    const entries = [...aggregation.entries].sort((a, b) => {
      const aVal = getValuesForEntry(a, sort);
      const bVal = getValuesForEntry(b, sort);
      return (aVal - bVal) * (sort.sortDir === "asc" ? 1 : -1);
    });
    return { ...aggregation, entries };
  }, [sort, aggregation]);

  const toggleNextSort = useCallback(
    (sort: Pick<Sort, "catId" | "valueId">) => {
      setSort((old) => {
        // if col changed, set to initial sort
        if (old.catId !== sort.catId || old.valueId !== sort.valueId) {
          return { ...sort, ...initSort } as Sort;
        }
        // if col stayed
        return {
          ...old,
          agg:
            old.sortDir === "desc"
              ? old.agg
              : old.agg === "avg"
              ? "sum"
              : "avg",
          sortDir: old.sortDir === "asc" ? "desc" : "asc",
        } as Sort;
      });
    },
    []
  );

  return { aggregation: sorted, toggleNextSort, sort };
}
