import React, { useState } from "react";

import { assets } from "../assets/frontend_assets/assets";

const { stripe_logo, razorpay_logo } = assets;

const PaymentMethod = React.memo(() => {
  const [paymentGateway, setPaymentGateway] = useState("cod");

  return (
    <div className="flex gap-3 flex-col lg:flex-row">
      {/* Stripe Payment Gateway */}
      <div
        onClick={() => setPaymentGateway("stripe")}
        className="flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer"
      >
        <p
          className={`min-w-3.5 h-3.5 border border-gray-500 rounded-full ${
            paymentGateway === "stripe" && "bg-green-400"
          }`}
        ></p>
        <img src={stripe_logo} alt="stripe logo" className="h-5 mx-4" />
      </div>
      {/* razorpay Payment Gateway */}
      <div
        onClick={() => setPaymentGateway("razorpay")}
        className="flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer"
      >
        <p
          className={`min-w-3.5 h-3.5 border border-gray-500 rounded-full ${
            paymentGateway === "razorpay" && "bg-green-400"
          }`}
        ></p>
        <img src={razorpay_logo} alt="razorpay logo" className="h-5 mx-4" />
      </div>
      {/* razorpay Payment Gateway */}
      <div
        onClick={() => setPaymentGateway("cod")}
        className="flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer"
      >
        <p
          className={`min-w-3.5 h-3.5 border border-gray-500 rounded-full ${
            paymentGateway === "cod" && "bg-green-400"
          }`}
        ></p>
        <p className="text-gray-500 text-sm font-medium mx-4">
          CASH ON DELIVERY
        </p>
      </div>
    </div>
  );
});

export default PaymentMethod;
