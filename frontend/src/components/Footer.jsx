import React from "react";

import { NavLink } from "react-router";

// assets
import { assets } from "../assets/frontend_assets/assets";

const { logo } = assets;

const footerLinks = [
  { title: "Home", route: "/" },
  { title: "About Us", route: "/about-us" },
  { title: "Delivery", route: "/delivery" },
  { title: "Privacy Policy", route: "/privacy-policy" },
];

const contactInfo = [
  { contact: "+1-212-456-7890", route: "/" },
  { contact: "contact@forever.com", route: "/" },
];

const Footer = React.memo(() => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm px-4 sm:px-[3vw] md:px[5vw] lg:px-[7vw]">
        {/* Left Section */}
        <section>
          <img src={logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, dignissimos!
          </p>
        </section>
        {/* Middle Section with Footer Links */}
        <section>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            {footerLinks.map(({ title, route }, idx) => (
              <NavLink key={idx} to={route}>
                {title}
              </NavLink>
            ))}
          </ul>
        </section>

        {/* Right Section with Get In Touch Info */}
        <section>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            {contactInfo.map(({ contact, route }, idx) => (
              <NavLink key={idx} to={route}>
                {contact}
              </NavLink>
            ))}
          </ul>
        </section>
      </div>
      <section className="px-4 sm:px-[3vw] md:px[5vw] lg:px-[7vw]">
        <hr className="text-gray-400" />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @forever.com - All Rights Reserved
        </p>
      </section>
    </>
  );
});

export default Footer;
