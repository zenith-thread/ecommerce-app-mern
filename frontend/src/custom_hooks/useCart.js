import { useDispatch, useSelector } from "react-redux";

// Selectors
import {
  selectIsOpen,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from "../store/cart/cart.selector";

// Actions
import {
  setCartIsOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../store/cart/cart.reducer";

export const useCart = () => {
  const dispatch = useDispatch();

  // Selectors
  const isOpen = useSelector(selectIsOpen);
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  // Dispatch Actions
  const setIsOpen = () => dispatch(setCartIsOpen(!isOpen));
  const addItem = (item) => dispatch(addItemToCart(item));
  const removeItem = (item) => dispatch(removeItemFromCart(item));
  const clearCartItems = (item) => dispatch(clearItemFromCart(item));

  return {
    // Selectors
    isOpen,
    cartItems,
    cartCount,
    cartTotal,

    // Actions
    setIsOpen,
    addItem,
    removeItem,
    clearCartItems,
  };
};
