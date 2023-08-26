import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../constants/status";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: STATUS.IDLE,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const productId = product.id;
      const isProductInCart = state.items.some(({ id }) => id === productId);
      if (isProductInCart) state.items.push(product);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
