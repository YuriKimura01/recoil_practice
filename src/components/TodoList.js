import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../utils/atom";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";
import { TodoListStats } from "./TodoListStats";
import { TodoListFilters } from "./TodoListFilters";

export const TodoList = () => {
  console.log("レンダリングした");
  const todoList = useRecoilValue(filteredTodoListState); // 読み込みのみ関数

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
