import type { Aggregation } from "~/types/aggregation";
import { AggregationEntryRow } from "./AggregationEntryRow";
import { categoryBorder, valueBorder } from "./styles";

interface Props {
  aggregation: Aggregation;
}

const AggregationTable: React.FC<Props> = (props) => {
  const { aggregation } = props;

  if (aggregation.entries.length === 0) {
    return <>No Data</>;
  }

  const hasHeroImage = aggregation.entries[0].hero ? 1 : 0;
  const columnCount =
    aggregation.entries[0].categories.reduce<number>(
      (sum, cat) => sum + cat.valueGroups.length,
      0
    ) +
    (hasHeroImage ? 1 : 0) +
    1;

  return (
    <div
      className="grid child:p-2"
      key={aggregation?.id}
      style={{
        gridTemplateColumns: `repeat(${columnCount},minmax(4rem,8rem)`,
      }}
    >
      <div style={{ gridColumn: `span ${hasHeroImage ? 2 : 1}` }}></div>
      {aggregation.entries[0].categories.map((cat) => (
        <div
          key={cat.id}
          style={{ gridColumn: `span ${cat.valueGroups.length}` }}
          className={categoryBorder}
        >
          {cat.label}
        </div>
      ))}
      <div style={{ gridColumn: `span ${hasHeroImage ? 2 : 1}` }}></div>
      {aggregation.entries[0].categories.map((cat) =>
        cat.valueGroups.map((vg, index) => (
          <div
            key={vg.id}
            className={
              index < cat.valueGroups.length - 1 ? valueBorder : categoryBorder
            }
          >
            {vg.label}
          </div>
        ))
      )}
      {aggregation?.entries.map((entry) => (
        <AggregationEntryRow entry={entry} key={entry.id} />
      ))}
    </div>
  );
};

export { AggregationTable };
