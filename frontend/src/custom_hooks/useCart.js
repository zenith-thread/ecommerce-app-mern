import { useDispatch, useSelector } from "react-redux";

// Selectors
import { selectIsOpen } from "../store/cart/cart.selector";

// Actions
import { setCartIsOpen } from "../store/cart/cart.reducer";

export const useCart = () => {
  const dispatch = useDispatch();

  // Selectors
  const isOpen = useSelector(selectIsOpen);

  // Dispatch Actions
  const setIsOpen = (toggle) => dispatch(setCartIsOpen(toggle));

  return { isOpen, setIsOpen };
};
