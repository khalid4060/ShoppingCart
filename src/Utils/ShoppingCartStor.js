import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const ShoppingCartStor = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default ShoppingCartStor;
