import { createSelector } from "@reduxjs/toolkit";

export const todos = (state) => state.todoSlice.todosList;
export const textFilter = (state) => state.filterSlice.text;
export const completedFilter = (state) => state.filterSlice.onlyCompleted;

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
