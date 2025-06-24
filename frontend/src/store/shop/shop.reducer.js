import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currency: "$",
  deliveryCharges: 0,
  searchField: "",
  searchBar: false,
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
    setSearchField: (state, action) => {
      state.searchField = action.payload;
    },
    setSearchBar: (state, action) => {
      state.searchBar = action.payload;
    },
  },
});

export const {
  setCurrency,
  setDeliveryCharges,
  setProducts,
  setSearchField,
  setSearchBar,
} = shopSlice.actions;
export const shopReducer = shopSlice.reducer;
