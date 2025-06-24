// pages
import Cart from "../pages/Checkout";

// components
import Button from "./Button";

// custom hooks
import { useCart } from "../custom_hooks/useCart";
import { useShop } from "../custom_hooks/useShop";

// react-router
import { Link } from "react-router";

const CartDropdown = () => {
  const { isOpen, cartItems } = useCart();
  const { shopCurreny } = useShop();
  return (
    <div
      className={`${
        !isOpen && "hidden"
      } absolute dropdown-menu right-[-2.5rem] sm:right-0 pt-4 z-9`}
    >
      <div className="flex flex-col gap-2 justify-center items-center w-[20rem] min-h-[30rem] h-[30rem] py-3 px-2 bg-slate-50 text-gray-500 rounded shadow-md">
        <div className="flex flex-col gap-2 h-[85%] w-[95%] overflow-y-scroll">
          {cartItems.map((cartItem) => (
            <div key={cartItem._id} className="min-h-[100px]">
              <div className="flex gap-3">
                <img src={cartItem.image[0]} className="w-20" />
                <div className="flex flex-col gap-3">
                  <h3>{cartItem.name}</h3>
                  <p>
                    {cartItem.quantity} x {shopCurreny}
                    {cartItem.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/checkout" className="w-full">
          <Button classname="btn !min-w-full !w-full">Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;
