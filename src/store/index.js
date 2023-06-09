import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slice/basketSlice";
import productsReducer from "./slice/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    basket: basketSlice,
  },
});
