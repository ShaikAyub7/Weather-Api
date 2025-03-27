import React from "react";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  return (
    <div className="block lg:hidden md:hidden fixed z-20 p-4 rounded-4xl bottom-0 w-full bg-gray-100  shadow-2xl text-gray-900">
      <NavLinks />
    </div>
  );
};

export default MobileMenu;
