import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  onlyCompleted: false,
};

const filterSlice = createSlice({
  name: "filterTodo",
  initialState: initialState,
  reducers: {
    setTextFilter: (state, action) => {
      state.text = action.payload;
    },
    setOnlyCompletedFilter: (state) => {
      state.onlyCompleted = !state.onlyCompleted;
    },
    resetAllFilters: (state) => {
      return initialState;
    },
  },
});
export const { setTextFilter, setOnlyCompletedFilter, resetAllFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
