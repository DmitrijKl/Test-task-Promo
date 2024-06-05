import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewTodo(state, action) {
      state.todosList = [action.payload, ...state.todosList];
    },
    firstMountLocalStorage(state, action) {
      state.todosList = action.payload;
    },
    deleteTodo(state, action) {
      state.todosList = state.todosList.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    deleteAllTodo(state) {
      state.todosList = [];
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
export const {
  addNewTodo,
  deleteTodo,
  toggleCompleted,
  deleteAllTodo,
  firstMountLocalStorage,
} = todoSlice.actions;
export default todoSlice.reducer;
