import { useMemo, useState } from "react";

// custom hook
import { useShop } from "../custom_hooks//useShop";

// Components
import Title from "../components/Title";
import VirtualizedProductItem from "../components/VirtualizedProductItem";

// assets
import { assets } from "../assets/frontend_assets/assets";

const { dropdown_icon } = assets;

const Collection = () => {
  const { shopProducts, shopCurreny, shopSearchBar, shopSearchField } =
    useShop();
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  // Mobile Filter Menu
  const toggleMobileFilterMenu = () => {
    setShowFilter(!showFilter);
  };

  // Filter Options for category and sub category
  const toggleCategory = (e) => {
    const categoryFromEvent = e.target.value;
    setCategory(
      (prev) =>
        prev.includes(categoryFromEvent)
          ? prev.filter((item) => item !== categoryFromEvent) // Remove if exists
          : [...prev, categoryFromEvent] // add if missing
    );
  };

  const toggleSubCategory = (e) => {
    const subCategoryFromEvent = e.target.value;
    setSubCategory(
      (prev) =>
        prev.includes(subCategoryFromEvent)
          ? prev.filter((item) => item !== subCategoryFromEvent) // Remove if exists
          : [...prev, subCategoryFromEvent] // add if missing
    );
  };

  // Filtered list based no category & sub category
  const filteredProducts = useMemo(() => {
    return shopProducts.filter((product) => {
      const searchFilter =
        shopSearchField.length === 0 ||
        (shopSearchBar &&
          shopSearchField &&
          product.name.toLowerCase().includes(shopSearchField.toLowerCase()));
      // filter based on category if exists
      const catFilter =
        category.length === 0 || category.includes(product.category);
      // filter based on subCategory if exists
      const subCatFilter =
        subCategory.length === 0 || subCategory.includes(product.subCategory);
      return catFilter && subCatFilter && searchFilter;
    });
  }, [shopProducts, category, subCategory, shopSearchField]);

  // Sorting Products based on price
  const sortedProducts = useMemo(() => {
    if (sortType === "low-high") {
      return [...filteredProducts].sort((a, b) => a.price - b.price);
    }
    if (sortType === "high-low") {
      return [...filteredProducts].sort((a, b) => b.price - a.price);
    }
    return filteredProducts;
  }, [filteredProducts, sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 px-4 sm:px-[3vw] md:px[5vw] lg:px-[7vw]">
      {/* Filter Options */}
      <section className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer"
          onClick={toggleMobileFilterMenu}
        >
          FILTERS
        </p>
        {/* Mobile Filter Menu */}
        <img
          src={dropdown_icon}
          alt="dropdown icon"
          className={`h-3 sm:hidden ${showFilter && "rotate-90"}`}
        />
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            !showFilter && "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Men", "Women", "Kids"].map((cat) => (
              <label key={cat} className="flex gap-2 cursor-pointer">
                <input
                  className="w-3"
                  type="checkbox"
                  value={cat}
                  checked={category.includes(cat)}
                  onChange={toggleCategory}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>
        {/* Sub Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            !showFilter && "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((subCat) => (
              <label key={subCat} className="flex gap-2 cursor-pointer">
                <input
                  className="w-3"
                  type="checkbox"
                  value={subCat}
                  checked={subCategory.includes(subCat)}
                  onChange={toggleSubCategory}
                />
                {subCat}
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* Right section */}
      <section className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          {/* Product Sort */}
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 rounded-md outline-none cursor-pointer text-sm px-2"
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <VirtualizedProductItem
          products={sortedProducts}
          shopCurreny={shopCurreny}
        />
      </section>
    </div>
  );
};

export default Collection;
