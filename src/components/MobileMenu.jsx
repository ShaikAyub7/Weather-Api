import React from "react";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  return (
    <div className="block lg:hidden md:hidden fixed z-20 p-3 rounded-2xl bottom-0 w-full bg-gray-200 border-t-1 shadow-t-3xl">
      <NavLinks />
    </div>
  );
};

export default MobileMenu;
