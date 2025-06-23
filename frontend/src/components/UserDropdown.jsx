import React from "react";

const dropdownLinks = [
  { title: "My Profile" },
  { title: "Orders" },
  { title: "Logout" },
];

const UserDropdown = React.memo(({ display }) => {
  return (
    <div
      className={`absolute dropdown-menu right-[-5rem] sm:right-0 pt-4 z-10 ${
        !display && "hidden"
      }`}
    >
      <div className="flex flex-col gap-2 w-[10rem] py-3 px-2 bg-slate-100 text-gray-500 rounded-xl shadow-sm">
        {dropdownLinks.map(({ title }, idx) => (
          <p
            key={idx}
            className="cursor-pointer hover:bg-gray-200 rounded py-1 px-3 transition ease-out"
          >
            {title}
          </p>
        ))}
      </div>
    </div>
  );
});

export default UserDropdown;
