import React from "react";

// components
import Title from "./Title";

// custom hooks
import { useShop } from "../custom_hooks/useShop";
import { useCart } from "../custom_hooks/useCart";

const CartTotal = React.memo(() => {
  const { shopCurreny, shopDeliveryCharges } = useShop();
  const { cartTotal } = useCart();

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1="CART" text2="TOTAL" />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {shopCurreny}
            {cartTotal}.00
          </p>
        </div>
        <hr className="border border-gray-300" />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {shopCurreny}
            {shopDeliveryCharges}.00
          </p>
        </div>
        <hr className="border border-gray-300" />
        <div className="flex justify-between font-bold">
          <p>Total</p>
          <p>
            {shopCurreny}
            {cartTotal + shopDeliveryCharges}.00
          </p>
        </div>
      </div>
    </div>
  );
});

export default CartTotal;
