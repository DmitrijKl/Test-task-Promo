import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: { todoSlice, filterSlice },
});
