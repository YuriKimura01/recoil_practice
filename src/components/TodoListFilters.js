import { useRecoilState } from "recoil";
import { todoListFilterState } from "../utils/atom";
import { memo } from "react";

// memo化しないとatomの参照していない値の更新に引っ張られてレンダリングされる
export const TodoListFilters = memo(() => {
  console.log("filterレンダリングした");
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value); // atomのstateを上書き
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
});
