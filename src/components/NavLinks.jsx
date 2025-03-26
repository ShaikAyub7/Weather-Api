import React from "react";
import { NavLink } from "react-router";
import { navlinks } from "../data";
const NavLinks = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col md:flex-row lg:flex-row">
        <ul className="flex flex-col md:flex-row lg:flex-row gap-1 ">
          {navlinks.map((link, i) => {
            return (
              <li className="border-b-1 lg:border-none p-3" key={i}>
                <NavLink to={link.Path}>{link.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
