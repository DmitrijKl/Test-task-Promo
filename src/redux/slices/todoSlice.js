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
  },
});
export const { addNewTodo } = todoSlice.actions;
export default todoSlice.reducer;
