import React from "react";

// React Router
import { Link } from "react-router";

const ProductItem = React.memo(({ product, shopCurreny }) => {
  const { _id, image, name, price } = product;

  // Calculate rendered width in px: 22rem × 16px/rem = 352px
  // If cards are square, use the same value for height;
  // otherwise, use the image’s natural aspect ratio to compute height.
  const DISPLAY_WIDTH = 352;
  const DISPLAY_HEIGHT = 209.6;

  return (
    <Link to={`/product/${_id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          loading="lazy"
          width={DISPLAY_WIDTH}
          height={DISPLAY_HEIGHT}
          className="w-[22rem] h-auto object-cover"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {shopCurreny}
        {price}
      </p>
    </Link>
  );
});

export default ProductItem;
