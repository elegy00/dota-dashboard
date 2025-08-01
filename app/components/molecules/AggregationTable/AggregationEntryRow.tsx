import type { AggregationEntry } from "~/types/aggregation";
import { AggregationValueCategoryColumn } from "./AggregationValueCategoryColumn";
import { Dialog, PopoverTrigger } from "../Popover";
import { Fragment } from "react/jsx-runtime";

interface Props {
  entry: AggregationEntry;
}

const AggregationEntryRow: React.FC<Props> = (props) => {
  const { entry } = props;

  return (
    <>
      <div>{entry.label}</div>

      {entry.hero && (
        <img
          alt={entry.hero.name}
          className="object-cover w-40 p-1 border-2 border-gray-300 rounded-md mb-2"
          src={entry.hero.heroImageUrl}
          key={entry.hero.name}
        />
      )}
      {entry.categories.map((cat) => (
        <AggregationValueCategoryColumn key={cat.id} category={cat} />
      ))}
    </>
  );
};

export { AggregationEntryRow };
