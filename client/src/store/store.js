import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import productsReducer from "./productsSlice";
import discountReducer from "./dicountSlice";
import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";

const mainReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  discount: discountReducer,
  cart: cartReducer,
  filter: filterReducer
});

export const store = configureStore({
  reducer: mainReducer,
});
