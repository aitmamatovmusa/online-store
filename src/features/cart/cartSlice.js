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
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    incrementQuantity(state, action) {
      const productId = action.payload;
      state.items = state.items.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: ++product.quantity,
          };
        }
        return product;
      });
    },
    decrementQuantity(state, action) {
      const productId = action.payload;
      state.items = state.items.map((product) => {
        if (product.id === productId && product.quantity > 1) {
          return {
            ...product,
            quantity: --product.quantity,
          };
        }
        return product;
      });
    },
  },
});

export const { addToCart, clearCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
