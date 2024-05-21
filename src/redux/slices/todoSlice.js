import { createSlice } from "@reduxjs/toolkit";
import todos from "../../data/todos.json";

const initialState = {
  todosList: todos,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewTodo(state, action) {
      state.todosList = [action.payload, ...state.todosList];
    },
    deleteTodo(state, action) {
      state.todosList = state.todosList.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    toggleCompleted(state, action) {
      state.todosList.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});
export const { addNewTodo, deleteTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
