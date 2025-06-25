import React from "react";

// custom hooks
import { useShop } from "../custom_hooks/useShop";
import { useCart } from "../custom_hooks/useCart";

// components
import Title from "../components/Title";
import Button from "../components/Button";

const Orders = React.memo(() => {
  const { shopCurreny, shopDeliveryCharges } = useShop();
  const { cartItems, cartTotal } = useCart();

  return (
    <div className="border-t border-gray-200 pt-16 px-4 sm:px-[3vw] md:px[5vw] lg:px-[7vw]">
      <div className="text-2xl">
        <Title text1="MY" text2="ORDERS" />
      </div>

      <div className="">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="py-4 border-t border-b border-gray-200 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img src={item.image} className="w-16 sm:w-20" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {shopCurreny}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text=gray-400">25, july, 2025</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm sm:text-base">Ready to Ship</p>
              </div>
              <Button classname="btn">Track Order</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Orders;
