import React from "react";

// custom hooks
import { useShop } from "../custom_hooks/useShop";
import { useCart } from "../custom_hooks/useCart";

// assets
import { assets } from "../assets/frontend_assets/assets";

const { bin_icon } = assets;

const CheckoutItem = React.memo(({ item }) => {
  const { addItem, removeItem, clearCartItems } = useCart();
  const { shopCurreny } = useShop();
  return (
    <div className="py-4 border-t   border-gray-200 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
      <div className="flex items-start gap-6">
        <img src={item.image} className="w-16 sm:w-20" />
        <div>
          <p className="text-sm sm:text-lg font-medium">{item.name}</p>
          <div className="flex items-center gap-5 mt-2 text-sm sm:text-base">
            <p>
              {shopCurreny}
              {item.price}
            </p>
            <p className="px-2 sm:px-3 sm:py-1 border border-gray-200 bg-gray-100">
              {item.size}
            </p>
          </div>
        </div>
      </div>
      <div className="text-sm sm:text-base">
        <span onClick={() => removeItem(item)} className="cursor-pointer pr-2">
          &#10094;
        </span>
        {item.quantity}
        <span onClick={() => addItem(item)} className="cursor-pointer pl-2">
          &#10095;
        </span>
      </div>
      <img
        src={bin_icon}
        onClick={() => clearCartItems(item)}
        className="cursor-pointer w-4"
      />
    </div>
  );
});

export default CheckoutItem;
