import clsx from "clsx";
import type { AggregationValueGroup } from "~/types/aggregation";
import type { Styleable } from "~/types/styleable";
import { calcSumAndPercentage } from "~/util/calc";

interface Props extends Styleable {
  group: AggregationValueGroup;
}

const AggregationValueGroupColumn: React.FC<Props> = (props) => {
  const { group, className } = props;

  const { sum, avg } = calcSumAndPercentage(group.values);

  return (
    <div className={clsx(className, "text-right flex flex-col")}>
      <span className="font-bold">{sum}</span>
      <span className="ml-2 text-sm">{group.values.length >= 1 && avg}</span>
    </div>
  );
};

export { AggregationValueGroupColumn };
