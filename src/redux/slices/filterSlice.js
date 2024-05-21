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
  },
});
export const { setTextFilter, setOnlyCompletedFilter } = filterSlice.actions;
export default filterSlice.reducer;
