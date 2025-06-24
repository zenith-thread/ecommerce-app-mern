import React, { useMemo, useEffect, useCallback, useState } from "react";
import debounce from "lodash.debounce";

// Components
import { useShop } from "../custom_hooks/useShop";

// assets
import { assets } from "../assets/frontend_assets/assets";
const { search_icon, cross_icon } = assets;

const SearchBar = () => {
  const {
    shopSearchField,
    shopSearchBar,
    setShopSearchField,
    setShopSearchBar,
  } = useShop();

  // Local state for search field
  const [localSearchField, setLocalSearchField] = useState(shopSearchField);

  useEffect(() => {
    setLocalSearchField(shopSearchField);
  }, [shopSearchField]);

  useEffect(() => {
    if (shopSearchBar) {
      setLocalSearchField(shopSearchField);
    }
  }, [shopSearchBar, shopSearchField]);

  // Search field on change handler
  const debouncedDispatch = useMemo(
    () =>
      debounce((value) => {
        console.log("Dispatching to Redux", value);
        setShopSearchField(value);
      }, 300),
    [setShopSearchField]
  );

  const onChangeHandler = useCallback(
    (e) => {
      const value = e.target.value;
      setLocalSearchField(value); // Immediate UI Update
      debouncedDispatch(value); // Debounced global update
    },
    [debouncedDispatch]
  );

  useEffect(() => {
    return () => {
      debouncedDispatch.cancel();
    };
  }, [debouncedDispatch]);

  const closeSearchBar = useCallback(() => {
    setShopSearchBar(false);
  }, [setShopSearchBar]);

  if (!shopSearchBar) {
    return null;
  }
  return (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
          value={localSearchField}
          onChange={onChangeHandler}
        />
        <img src={search_icon} alt="search icon" className="w-4" />
      </div>
      <img
        src={cross_icon}
        alt="cross icon"
        className="inline w-3 cursor-pointer"
        onClick={closeSearchBar}
      />
    </div>
  );
};

export default SearchBar;
