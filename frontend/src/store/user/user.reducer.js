import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = userSlice.actions;
export const userReducer = userSlice.reducer;
