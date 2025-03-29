import React from "react";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  return (
    <div className="block lg:hidden md:hidden fixed z-1000 p-3 rounded-t-3xl bottom-0 w-full bg-gray-100  shadow-2xl text-gray-900 border-t-1 border-t-gray-500">
      <NavLinks />
    </div>
  );
};

export default MobileMenu;
