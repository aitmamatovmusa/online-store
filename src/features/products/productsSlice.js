import { STATUS } from "../../constants/status";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpService from "../../api/client";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await httpService("products");
    return data;
  }
);

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
    status: STATUS.IDLE,
    items: [],
    categories: {
      status: STATUS.IDLE,
      items: [],
    },
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categories.status = STATUS.LOADING;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories.status = STATUS.FULFILLED;
        state.categories.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.categories.status = STATUS.ERROR;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUS.pending;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = STATUS.FULFILLED;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
  },
});

export default productsSlice.reducer;
