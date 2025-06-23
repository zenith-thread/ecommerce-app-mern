import React from "react";

// React Router
import { NavLink } from "react-router";

const MobileSidebar = React.memo(({ visible, icon, navLinks, onClick }) => {
  return (
    <div
      className={`absolute top-0 right-0 overflow-hidden h-screen bg-slate-200 transition-all shadow-2xl shadow-gray-700 rounded-l-2xl  ${
        visible ? "w-[90%]" : "w-0"
      }`}
    >
      <div className="flex flex-col text-gray-600 px-6 py-4">
        <div
          onClick={onClick}
          className="flex items-center gap-4 cursor-pointer"
        >
          <img
            src={icon}
            alt="mobile dropdown icon"
            className="h-4 rotate-180"
          />
          <p>Back</p>
        </div>
        <div className="mt-10 flex flex-col">
          {navLinks.map(({ title, route }, idx) => (
            <NavLink
              key={idx}
              to={route}
              className="py-2 pl-6 border-slate-300 border-b"
              onClick={onClick}
            >
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
});

export default MobileSidebar;
