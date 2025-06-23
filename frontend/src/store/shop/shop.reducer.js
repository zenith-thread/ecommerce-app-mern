import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currency: "$",
  deliveryCharges: 0,
  products: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setDeliveryCharges: (state, action) => {
      state.deliveryCharges = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setCurrency, setDeliveryCharges, setProducts } =
  shopSlice.actions;
export const shopReducer = shopSlice.reducer;
