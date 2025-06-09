import { createSlice } from "@reduxjs/toolkit";

// Початковий стан фільтра
const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

//  Action для оновлення фільтра
export const { setNameFilter } = filtersSlice.actions;

//  Селектор: отримує значення поля name з фільтра
export const selectNameFilter = (state) => state.filters.name;

export default filtersSlice.reducer;
