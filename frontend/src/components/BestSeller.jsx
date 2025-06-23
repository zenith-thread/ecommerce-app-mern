import React, { useEffect, useState, useMemo } from "react";

// Components
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = React.memo(({ shopCurreny, shopProducts }) => {
  const [bestSeller, setBestSeller] = useState([]);
  const bestProducts = useMemo(() =>
    shopProducts.filter((product) => product.bestseller, [shopProducts])
  );
  useEffect(() => {
    if (shopProducts.length > 0) {
      setBestSeller(bestProducts.slice(0, 5));
    }
  }, [shopProducts]);

  return (
    // TITLE
    <div className="my-20">
      <div className="text-center text-3xl py-20">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-sm ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum vero
          omnis labore mollitia, quaerat error.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((product) => (
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

export default BestSeller;
