import type { AggregationValueGroup } from "~/types/aggregation";

interface Props {
  group: AggregationValueGroup;
}

const AggregationValueGroupColumn: React.FC<Props> = (props) => {
  const { group } = props;
  return (
    <div>
      {/* {group.grouping === "avg" &&
        group.values.reduce<{ sum: number; count: number }>((ag, curr) => {})} */}
      {group.grouping === "sum" &&
        group.values.reduce((sum, current) => sum + (current.value ?? 0), 0)}
    </div>
  );
};

export { AggregationValueGroupColumn };
