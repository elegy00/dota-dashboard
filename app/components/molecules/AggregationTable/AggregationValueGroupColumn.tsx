import clsx from "clsx";
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
    <div className={clsx(className, "text-right flex flex-col")}>
      <span className="font-bold">{sum}</span>
      <span className="ml-2 text-sm">
        {group.values.length > 1 &&
          Math.round((sum * 10) / group.values.length) / 10}
      </span>
    </div>
  );
};

export { AggregationValueGroupColumn };
