import React from "react";
import { VirtuosoGrid } from "react-virtuoso";

// components
import ProductItem from "./ProductItem";

// Memoized version of ProductItem
const MemoProductItem = React.memo(ProductItem);

const VirtualizedProductItem = ({ products, shopCurreny }) => {
  return (
    <VirtuosoGrid
      totalCount={products.length}
      useWindowScroll
      // the class that makes it a responsive grid
      listClassName="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6"
      itemClassName="" // no extra wrapper classes
      overscan={200} // renders a bit off-screen for smoothness
      components={{
        Item: ({ children, ...props }) => <div {...props}>{children}</div>,
      }}
      itemContent={(index) => {
        const product = products[index];
        return (
          <MemoProductItem
            key={product._id}
            product={product}
            shopCurreny={shopCurreny}
          />
        );
      }}
    />
  );
};

export default VirtualizedProductItem;
