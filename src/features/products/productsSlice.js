import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpService from "../../api/client"

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const { data: categories } = await httpService('products/categories')
    return categories
  }
)

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    categories: []
  },
  reducers: {

  }
})