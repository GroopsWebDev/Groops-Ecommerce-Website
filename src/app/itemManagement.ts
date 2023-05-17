import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  category: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryList: (state, action: PayloadAction<[]>) => {
      state.category = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryList } = categorySlice.actions;

export default categorySlice.reducer;
