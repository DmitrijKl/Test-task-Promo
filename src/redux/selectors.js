import { createSelector } from "@reduxjs/toolkit";

const todos = (state) => state.todoSlice.todosList;
const textFilter = (state) => state.filterSlice.text;
const completedFilter = (state) => state.filterSlice.onlyCompleted;

export const selectTodosFiltered = createSelector(
  [todos, textFilter, completedFilter],
  (todos, textFilter, completedFilter) => {
    return todos.filter((todo) => {
      const textFiltered = todo.text
        .toLowerCase()
        .includes(textFilter.trim().toLowerCase());
      const completedFiltered = completedFilter ? todo.completed : true;
      return textFiltered && completedFiltered;
    });
  }
);
