import { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { products } from "../assets/frontend_assets/assets";

// Selectors
import {
  selectShopCurrency,
  selectShopDeliveryCharges,
  selectShopProducts,
  selectSearchField,
  selectSearchBar,
} from "../store/shop/shop.selector";

// Actions
import {
  setCurrency,
  setDeliveryCharges,
  setProducts,
  setSearchField,
  setSearchBar,
} from "../store/shop/shop.reducer";

export const useShop = () => {
  const dispatch = useDispatch();

  // Selectors
  const shopCurreny = useSelector(selectShopCurrency);
  const shopDeliveryCharges = useSelector(selectShopDeliveryCharges);
  const shopProducts = useSelector(selectShopProducts);
  const shopSearchField = useSelector(selectSearchField);
  const shopSearchBar = useSelector(selectSearchBar);

  // Dispatch Actions
  const setShopCurrency = (currency) => dispatch(setCurrency(currency));
  const setShopDeliveryCharges = (charges) =>
    dispatch(setDeliveryCharges(charges));
  const setShopProducts = () => dispatch(setProducts(products));
  const setShopSearchField = useCallback(
    (sarchField) => dispatch(setSearchField(sarchField)),
    [dispatch]
  );
  const setShopSearchBar = (searchBar) => dispatch(setSearchBar(searchBar));

  return {
    // Selectors
    shopCurreny,
    shopDeliveryCharges,
    shopProducts,
    shopSearchField,
    shopSearchBar,

    // Actions
    setShopCurrency,
    setShopDeliveryCharges,
    setShopProducts,
    setShopSearchField,
    setShopSearchBar,
  };
};
