import React, { useEffect, useMemo, useState } from "react";

// Custom hook
import { useShop } from "../custom_hooks/useShop";

// Components
import VirtualizedProductItem from "./VirtualizedProductItem";
import Title from "./Title";

const RelatedProducts = ({ category, subCategory, productId }) => {
  const { shopProducts, shopCurreny } = useShop();

  const [related, setRelated] = useState([]);

  const getRelatedProducts = shopProducts.filter((product) => {
    const catProduct =
      category.length === 0 ||
      (product.category === category && product._id !== productId);
    const subCatProduct =
      subCategory.length === 0 ||
      (product.subCategory === subCategory && product._id !== productId);

    return catProduct && subCatProduct;
  });

  useEffect(() => {
    setRelated(getRelatedProducts);
  }, []);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <VirtualizedProductItem
        products={related.slice(0, 4)}
        shopCurreny={shopCurreny}
      />
    </div>
  );
};

export default RelatedProducts;
