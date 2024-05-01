import type { AggregationValueGroup } from "~/types/aggregation";
import type { Styleable } from "~/types/styleable";

interface Props extends Styleable {
  group: AggregationValueGroup;
}

const AggregationValueGroupColumn: React.FC<Props> = (props) => {
  const { group, className } = props;
  const sum = group.values.reduce(
    (sum, current) => sum + (current.value ?? 0),
    0
  );
  return (
    <div className={className}>
      {/* {group.grouping === "avg" &&
        group.values.reduce<{ sum: number; count: number }>((ag, curr) => {})} */}
      {/* {group.grouping === "sum" && */}
      <span>{sum}</span>
      <span className="ml-2">
        {group.values.length > 1 && `(${sum / group.values.length})`}
      </span>
    </div>
  );
};

export { AggregationValueGroupColumn };
