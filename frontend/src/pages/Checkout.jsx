import React from "react";
import { useNavigate } from "react-router";

// components
import Title from "../components/Title";
import CheckoutItem from "../components/CheckoutItem";
import CartTotal from "../components/CartTotal";
import Button from "../components/Button";

// custom hooks
import { useCart } from "../custom_hooks/useCart";

const Checkout = () => {
  const { cartItems } = useCart();

  const navigate = useNavigate();

  return (
    <div className="border-t pt-14 px-4 sm:px-[3vw] md:px[5vw] lg:px-[7vw]">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
        <div>
          {cartItems.map((item) => (
            <CheckoutItem key={item._id} item={item} />
          ))}
        </div>
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end mt-6">
              <Button
                onClick={() => navigate("/place-order")}
                classname="btn !min-w-[200px]"
              >
                Prooceed to Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
