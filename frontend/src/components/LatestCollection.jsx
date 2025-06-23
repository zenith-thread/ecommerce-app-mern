import React, { lazy, useEffect, useState } from "react";

// components
const Title = lazy(() => import("./Title"));
const ProductItem = lazy(() => import("./ProductItem"));

const LatestCollection = React.memo(({ shopProducts, shopCurreny }) => {
  const [latestProducts, setLatestProducts] = useState([]);

  // get ten Latest Products
  useEffect(() => {
    shopProducts.length > 0 && setLatestProducts(shopProducts.slice(0, 10));
  }, [shopProducts]);

  return (
    <div className="my-20">
      {/* Title  */}
      <div className="text-center py-20 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          iusto, fugit harum voluptatum laboriosam quo.
        </p>
      </div>

      {/* Rendering Latest Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {shopProducts.length > 0 &&
          latestProducts.map((product) => (
            <ProductItem
              key={product._id}
              product={product}
              shopCurreny={shopCurreny}
            />
          ))}
      </div>
    </div>
  );
});

export default LatestCollection;
