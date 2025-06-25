import { createSelector } from "@reduxjs/toolkit";

const selectUserReducer = (state) => state.user;

export const selectIsLoggedIn = createSelector(
  [selectUserReducer],
  (user) => user.isLoggedIn
);
