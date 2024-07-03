import clsx from "clsx";
import {
  AggregationValue,
  type AggregationValueGroup,
} from "~/types/aggregation";
import type { Styleable } from "~/types/styleable";
import { calcSumAndPercentage } from "~/util/calc";
import { Dialog, PopoverTrigger } from "../Popover";
import { Fragment } from "react/jsx-runtime";
import { useMemo } from "react";

interface Props extends Styleable {
  group: AggregationValueGroup;
}

const AggregationValueGroupColumn: React.FC<Props> = (props) => {
  const { group, className } = props;

  const { sum, avg } = useMemo(() => calcSumAndPercentage(group.values), []);
  const groupElements = useMemo(
    () =>
      group.values
        .reduce<AggregationValue[]>((accumulator, curr) => {
          // if(acc.)
          const match = accumulator.find((acc) => acc.id === curr.id);
          if (match) {
            match.value = (match.value ?? 0) + (curr.value ?? 0);
          } else {
            return [...accumulator, { ...curr }];
          }
          return accumulator;
        }, [])
        .sort((a, b) => (b.value ?? 0) - (a.value ?? 0)),
    []
  );

  return (
    <div className={className}>
      <PopoverTrigger
        label={
          <div className={clsx("w-full text-right flex flex-col")}>
            <span className="font-bold">{sum}</span>
            <span className="ml-2 text-sm">
              {group.values.length >= 1 && avg}
            </span>
          </div>
        }
        className="w-full"
      >
        <Dialog>
          <div className="grid grid-cols-2 gap-y-1 gap-x-2">
            {groupElements.map((vl) => (
              <Fragment key={vl.id}>
                <div>{vl.label}</div>
                <div className="text-right">{vl.value}</div>
              </Fragment>
            ))}
          </div>
        </Dialog>
      </PopoverTrigger>
    </div>
  );
};

export { AggregationValueGroupColumn };
