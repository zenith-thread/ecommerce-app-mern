import { useDispatch, useSelector } from "react-redux";

// Selectors
import { selectIsLoggedIn } from "../store/user/user.selector";

// Actions
import { setIsLoggedIn } from "../store/user/user.reducer";

export const useUser = () => {
  const dispatch = useDispatch();

  // Selectors
  const userIsLoggedIn = useSelector(selectIsLoggedIn);

  // Actions
  const userSetIsLoggedIn = (isLoggedIn) => dispatch(setIsLoggedIn(isLoggedIn));

  return {
    // Selectors
    userIsLoggedIn,

    // Actions
    userSetIsLoggedIn,
  };
};
