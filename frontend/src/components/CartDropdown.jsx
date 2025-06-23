// pages
import Cart from "../pages/Checkout";

// components
import Button from "./Button";

// custom hooks
import { useCart } from "../custom_hooks/useCart";

// react-router
import { Link } from "react-router";

const CartDropdown = () => {
  const { isOpen } = useCart();

  return (
    <div
      className={`${
        !isOpen && "hidden"
      } absolute dropdown-menu right-[-2.5rem] sm:right-0 pt-4`}
    >
      <div className="flex flex-col gap-2 w-[20rem] min-h-[30rem] h-[30rem] overflow-y-scroll py-3 px-2 bg-slate-50 text-gray-500 rounded shadow-md">
        <Link to="/checkout">
          <Button classname="btn">Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;
