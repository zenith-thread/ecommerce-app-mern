import { useDispatch, useSelector } from "react-redux";

import { products } from "../assets/frontend_assets/assets";

// Selectors
import {
  selectShopCurrency,
  selectShopDeliveryCharges,
  selectShopProducts,
} from "../store/shop/shop.selector";

// Actions
import {
  setCurrency,
  setDeliveryCharges,
  setProducts,
} from "../store/shop/shop.reducer";

export const useShop = () => {
  const dispatch = useDispatch();

  // Selectors
  const shopCurreny = useSelector(selectShopCurrency);
  const shopDeliveryCharges = useSelector(selectShopDeliveryCharges);
  const shopProducts = useSelector(selectShopProducts);

  // Dispatch Actions
  const setShopCurrency = (currency) => dispatch(setCurrency(currency));
  const setShopDeliveryCharges = (charges) =>
    dispatch(setDeliveryCharges(charges));
  const setShopProducts = () => dispatch(setProducts(products));

  return {
    // Selectors
    shopCurreny,
    shopDeliveryCharges,
    shopProducts,

    // Actions
    setShopCurrency,
    setShopDeliveryCharges,
    setShopProducts,
  };
};
