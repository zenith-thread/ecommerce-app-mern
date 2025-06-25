import { Suspense, lazy, useEffect } from "react";

// React Router
import { Routes, Route } from "react-router";

// Custom hooks
import { useShop } from "./custom_hooks/useShop";

// PAGES
import Loading from "./pages/Loading";
import Navbar from "./components/Navbar";
// Lazy Imports
const Home = lazy(() => import("./pages/Home"));
const Collection = lazy(() => import("./pages/Collection"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Product = lazy(() => import("./pages/Product"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Login = lazy(() => import("./pages/Login"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder"));
const Orders = lazy(() => import("./pages/Orders"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

import { ToastContainer } from "react-toastify";

const App = () => {
  // custom hook
  const { setShopProducts } = useShop();

  // set the products to the shop reducer
  useEffect(() => {
    setShopProducts();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="collection" element={<Collection />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="place-order" element={<PlaceOrder />} />
          <Route path="orders" element={<Orders />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
