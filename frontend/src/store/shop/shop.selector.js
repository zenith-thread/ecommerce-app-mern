import { createSelector } from "@reduxjs/toolkit";

const shopReducer = (state) => state.shop;

export const selectShopProducts = createSelector(
  [shopReducer],
  (shop) => shop.products
);

export const selectShopCurrency = createSelector(
  [shopReducer],
  (shop) => shop.currency
);

export const selectShopDeliveryCharges = createSelector(
  [shopReducer],
  (shop) => shop.deliveryCharges
);
