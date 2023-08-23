import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpService from "../../api/client";

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const { data: categories } = await httpService("products/categories");
    return categories;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    categories: {
      status: "idle",
      items: [],
    },
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categories.status = "pending";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories.status = "fulfilled";
        state.categories.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categories.status = action.error;
      });
  },
});

export default productsSlice.reducer;
