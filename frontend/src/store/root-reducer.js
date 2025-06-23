import { combineReducers } from "@reduxjs/toolkit";

// reducers
import { cartReducer } from "./cart/cart.reducer";
import { shopReducer } from "./shop/shop.reducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer,
});
