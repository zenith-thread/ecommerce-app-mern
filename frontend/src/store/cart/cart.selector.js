import { createSelector } from "@reduxjs/toolkit";

const cartReducer = (state) => state.cart;

export const selectIsOpen = createSelector(
  [cartReducer],
  (cart) => cart.isOpen
);
