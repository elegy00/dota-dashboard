import type { AggregationValueGroup } from "~/types/aggregation";
import type { Styleable } from "~/types/styleable";

interface Props extends Styleable {
  group: AggregationValueGroup;
}

const AggregationValueGroupColumn: React.FC<Props> = (props) => {
  const { group, className } = props;
  return (
    <div className={className}>
      {/* {group.grouping === "avg" &&
        group.values.reduce<{ sum: number; count: number }>((ag, curr) => {})} */}
      {group.grouping === "sum" &&
        group.values.reduce((sum, current) => sum + (current.value ?? 0), 0)}
    </div>
  );
};

export { AggregationValueGroupColumn };
