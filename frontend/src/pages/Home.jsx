import { Suspense, lazy } from "react";

// Components
import Hero from "../components/Hero";
const LatestCollection = lazy(() => import("../components/LatestCollection"));
const BestSeller = lazy(() => import("../components/BestSeller"));
const OurPolicy = lazy(() => import("../components/OurPolicy"));
const NewsLetter = lazy(() => import("../components/NewsLetter"));

// Custom hooks
import { useShop } from "../custom_hooks/useShop";

const Home = () => {
  // custom hook
  const { shopProducts, shopCurreny } = useShop();

  return (
    <>
      <Hero />
      <Suspense
        fallback={
          <p className="flex items-center justify-ceter font-bold tracking-wider text-xl">
            Loading Latest Products...
          </p>
        }
      >
        <LatestCollection
          shopProducts={shopProducts}
          shopCurreny={shopCurreny}
        />
        <BestSeller shopProducts={shopProducts} shopCurreny={shopCurreny} />
        <OurPolicy />
        <NewsLetter />
      </Suspense>
    </>
  );
};

export default Home;
