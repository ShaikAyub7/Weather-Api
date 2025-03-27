import React from "react";
import { NavLink } from "react-router";
import { navlinks } from "../data";
const NavLinks = () => {
  return (
    <div className="w-full ">
      <ul className="w-full flex lg:flex-row gap-4 text-center">
        {navlinks.map((link, i) => (
          <li key={i} className="w-full py-2 transition-all lg:border-none">
            <NavLink to={link.Path} className="w-full p-1  ">
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
