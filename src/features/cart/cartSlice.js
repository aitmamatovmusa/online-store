import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../constants/status";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: STATUS.IDLE,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const productId = product.id;
      const isProductInCart = state.items.some(({ id }) => id === productId);
      if (!isProductInCart) {
        state.items.push({
          id: productId,
          image: product.image,
          title: product.title,
          price: product.price,
          quantity: 1,
        });
        state.totalPrice += product.price;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
