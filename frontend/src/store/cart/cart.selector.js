import { createSelector } from "@reduxjs/toolkit";

const cartReducer = (state) => state.cart;

export const selectIsOpen = createSelector(
  [cartReducer],
  (cart) => cart.isOpen
);

export const selectCartItems = createSelector(
  [cartReducer],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  )
);
