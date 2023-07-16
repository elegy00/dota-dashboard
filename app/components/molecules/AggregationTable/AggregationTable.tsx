import type { Aggregation } from "~/types/aggregation";
import { AggregationEntryRow } from "./AggregationEntryRow";

interface Props {
  aggregation: Aggregation;
}

const AggregationTable: React.FC<Props> = (props) => {
  const { aggregation } = props;

  const columnCount =
    aggregation.entries[0].categories.reduce<number>(
      (sum, cat) => sum + cat.valueGroups.length,
      0
    ) +
    (aggregation.entries[0].hero ? 1 : 0) +
    1;

  return (
    <div
      className="grid gap-2"
      key={aggregation?.id}
      style={{
        gridTemplateColumns: `repeat(${columnCount},minmax(4rem,8rem)`,
      }}
    >
      {aggregation?.entries.map((entry, index) => (
        <AggregationEntryRow entry={entry} key={entry.id} />
      ))}
    </div>
  );
};

export { AggregationTable };
