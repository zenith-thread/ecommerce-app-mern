import { Suspense, lazy } from "react";

// React Router
import { Routes, Route } from "react-router";

import Loading from "./pages/Loading";
// Lazy Imports
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="px-4 sm:px-[5vw] md:px-[7vw]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
