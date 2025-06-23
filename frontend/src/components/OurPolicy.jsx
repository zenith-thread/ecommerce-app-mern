import React from "react";

// assets
import { assets } from "../assets/frontend_assets/assets";

const { exchange_icon, quality_icon, support_img } = assets;

const policyFields = [
  {
    image: exchange_icon,
    title: "Easy Exchange Policy",
    subtitle: "We offer hassle free exchange policy",
  },
  {
    image: quality_icon,
    title: "7 Das Return Policy",
    subtitle: "We provide 7 days free return policy",
  },
  {
    image: support_img,
    title: "Best Customer Support",
    subtitle: "We provide 24.7 customer support",
  },
];

const OurPolicy = React.memo(() => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-16 sm:gap-2 text-center py-10 sm:py-25 text-xs sm:text-sm md:text-base text-gray-700">
      {policyFields.map(({ image, title, subtitle }) => (
        <div>
          <img src={image} alt="exchange icon" className="w-12 m-auto mb-5" />
          <p className="font-semibold">{title}</p>
          <p className="text-gray-400">{subtitle}</p>
        </div>
      ))}
    </div>
  );
});

export default OurPolicy;
