import { lazy, Suspense } from "react";

// React Router
import { useNavigate } from "react-router";

// components
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import Button from "../components/Button";
const DeliveryInformation = lazy(() =>
  import("../components/DeliveryInformation")
);
const PaymentMethod = lazy(() => import("../components/PaymentMethod"));

const PlaceOrder = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm-sm:pt-14 min-h-[80vh] border-t border-gray-200 px-4 sm:px-[3vw] md:px[5vw] lg:px-[7vw]">
      {/* ------------------------- Delivery Information -------------------------  */}
      <Suspense fallback={<p>Loading Form...</p>}>
        <DeliveryInformation />
      </Suspense>
      {/* ------------------------- Delivery Information -------------------------  */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          {/* ------------------------- Payment Method Selection -------------------------  */}
          <Suspense fallback={<p>Loading Delivery Methods...</p>}>
            <PaymentMethod />
          </Suspense>
        </div>
        <div className="w-full text-end mt-8">
          <Button onClick={() => navigate("/orders")} classname="btn">
            PLACE ORDER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
