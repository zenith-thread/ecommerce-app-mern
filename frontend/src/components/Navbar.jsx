import React, { lazy, useState } from "react";

// React Router
import { Outlet, NavLink, Link, useLocation, useNavigate } from "react-router";

// Components
import UserDropdown from "./UserDropdown";
import CartDropdown from "./CartDropdown";
import MobileSidebar from "./MobileSidebar";
import SearchBar from "./SearchBar";
const Footer = lazy(() => import("./Footer"));
// custom hooks
import { useCart } from "../custom_hooks/useCart";
import { useShop } from "../custom_hooks/useShop";
import { useUser } from "../custom_hooks/useUser";

// assets
import { assets } from "../assets/frontend_assets/assets";

const { logo, search_icon, profile_icon, cart_icon, menu_icon, dropdown_icon } =
  assets;

// Navlinks

const navLinks = [
  { title: "HOME", route: "/" },
  { title: "COLLECTION", route: "/collection" },
  { title: "ABOUT", route: "/about" },
  { title: "CONTACT", route: "/contact" },
];

// Hide footer routes
const HIDE_FOOTER_ROUTES = ["/login", "/checkout"];

// Show Searchbar route
const SHOW_SEARCHBAR_ROUTES = ["/collection"];

const Navbar = React.memo(() => {
  const location = useLocation();
  const shouldHideFooter = HIDE_FOOTER_ROUTES.includes(location.pathname);
  const shouldShowSearchbar = SHOW_SEARCHBAR_ROUTES.includes(location.pathname);
  const navigate = useNavigate();
  // User Hook
  const { userIsLoggedIn, userSetIsLoggedIn } = useUser();

  // local state for user dropdown menu
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    if (!userIsLoggedIn) {
      navigate("/login");
      userSetIsLoggedIn(true);
      return;
    }
    setDropdown(!dropdown);
  };

  // redux for cart dropdown
  const { setIsOpen, cartCount } = useCart();

  const toggleCartDrowndown = (e) => {
    e.preventDefault();

    setIsOpen();
  };

  // mobile menu
  const [visible, setVisible] = useState(false);

  const toggleMenuOpen = () => {
    setVisible(true);
  };

  const toggleMenuClose = () => {
    setVisible(false);
  };

  // Search Bar
  const { setShopSearchBar } = useShop();

  const openSearchBar = () => {
    setShopSearchBar(true);
  };

  return (
    <>
      <div className="flex items-center justify-between py-5 font-medium px-4 sm:px-[3vw] md:px[5vw] lg:px-[7vw]">
        {/* LOGO */}
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-36" />
        </NavLink>

        {/* Nav Links */}
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          {navLinks.map(({ title, route }, idx) => (
            <NavLink
              key={idx}
              to={route}
              className="flex flex-col items-center gap-1"
            >
              <p>{title}</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          ))}
        </ul>

        {/* Search Icon and Dropdown Menu */}
        <div className="flex items-center gap-6">
          <img
            src={search_icon}
            alt="search icon"
            className="w-5 cursor-pointer"
            onClick={openSearchBar}
          />

          <div className="relative" onClick={toggleDropdown}>
            <img
              src={profile_icon}
              alt="profile icon"
              className="w-5 cursor-pointer"
            />
            <UserDropdown display={dropdown} />
          </div>

          {/* Cart */}
          <div className="relative">
            <Link
              to="/checkout"
              className="relative"
              onClick={toggleCartDrowndown}
            >
              <img src={cart_icon} alt="cart icon" className="w-5 min-w-5" />
            </Link>
            <p className="absolute right-[-7px] bottom-[-8px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">
              {cartCount}
            </p>
            <CartDropdown />
          </div>

          {/* Mobile Menu */}
          <img
            src={menu_icon}
            alt="menu icon"
            className="w-5 cursor-pointer sm:hidden"
            onClick={toggleMenuOpen}
          />
          <MobileSidebar
            visible={visible}
            icon={dropdown_icon}
            navLinks={navLinks}
            onClick={toggleMenuClose}
          />
        </div>
      </div>
      {shouldShowSearchbar && <SearchBar />}
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </>
  );
});

export default Navbar;
