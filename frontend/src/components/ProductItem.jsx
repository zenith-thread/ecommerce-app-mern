import React from "react";

// React Router
import { Link } from "react-router";

// Custom Hook
import { useShop } from "../custom_hooks/useShop";

const ProductItem = React.memo(({ product, shopCurreny }) => {
  const { _id, image, name, price } = product;

  return (
    <Link to={`/product/${_id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="hover:scale-105 transition ease-in-out"
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
