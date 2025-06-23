import { Suspense, lazy } from "react";

// Components
import Hero from "../components/Hero";
const LatestCollection = lazy(() => import("../components/LatestCollection"));

const Home = () => {
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
        <LatestCollection />
      </Suspense>
    </>
  );
};

export default Home;
