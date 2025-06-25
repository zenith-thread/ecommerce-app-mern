import React from "react";

// components
import Title from "./Title";

const DeliveryInformation = React.memo(() => {
  return (
    <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
      <div className="text-xl sm:text-2xl my-3">
        <Title text1="DELIVERY" text2="INFORMATION" />
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="First Name"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
      />
      <input
        type="text"
        placeholder="Street"
        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
      />
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="City"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="State"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>
      <div className="flex gap-3">
        <input
          type="number"
          placeholder="Zipcode"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="Country"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>
      <input
        type="number"
        placeholder="Phone"
        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
      />
    </div>
  );
});

export default DeliveryInformation;
