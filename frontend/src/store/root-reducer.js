import { combineReducers } from "@reduxjs/toolkit";

// reducers
import { cartReducer } from "./cart/cart.reducer";
import { shopReducer } from "./shop/shop.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer,
  user: userReducer,
});
