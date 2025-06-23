import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    setCartIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setCartIsOpen } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
