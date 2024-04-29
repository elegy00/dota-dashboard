import type { AggregationValueCategory } from "~/types/aggregation";
import { AggregationValueGroupColumn } from "./AggregationValueGroupColumn";
import { valueBorder, categoryBorder } from "./styles";

interface Props {
  category: AggregationValueCategory;
}

const AggregationValueCategoryColumn: React.FC<Props> = (props) => {
  const { category } = props;
  return (
    <>
      {/* <div>{entry.label}</div>
      {entry.hero && (
        <img
          alt={entry.hero.name}
          className="object-cover w-40 p-1 border-2 border-grey-300 rounded-md"
          src={entry.hero.heroImageUrl}
          key={entry.hero.name}
        />
      )} */}
      {category.valueGroups.map((valueGroup, index) => (
        <AggregationValueGroupColumn
          key={valueGroup.id}
          group={valueGroup}
          className={
            index < category.valueGroups.length - 1
              ? valueBorder
              : categoryBorder
          }
        />
      ))}
    </>
  );
};

export { AggregationValueCategoryColumn };
