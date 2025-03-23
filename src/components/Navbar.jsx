import { useGlobalContext } from "./Context";
import { FaLocationArrow } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router";

import NavLinks from "./NavLinks";
import Location from "./Location";

const Navbar = () => {
  const {
    fetchWeatherByCity,
    setSearch,
    search,
    data,
    currentLocationData,
    loading,
  } = useGlobalContext();

  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div to={"/"} className="hidden lg:flex btn  text-3xl items-center">
            CloudLink
          </div>
          <div className="dropdown">
            <label htmlFor="" tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-200 w-46 h-96"
            >
              <div className=" flex flex-col items-center justify-center place-content-center  md:block lg:hidden">
                <div className="flex items-center border-b-1 py-2.5">
                  Theme : <NavLinks />
                </div>
                <div className="flex items-center justify-baseline mt-2.5 border-b-1 py-2.5">
                  <Location />
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="text-center  items-center justify-center px-8">
          {loading ? (
            <>
              <span className="loading loading-ring loading-sm"></span>
            </>
          ) : (
            <div className="hidden lg:flex">
              <Location />
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search city..."
            value={search}
            className="input input-bordered w-24 md:w-auto"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-accent mr-8"
            onClick={() => fetchWeatherByCity(search)}
          >
            Search
          </button>
          <div className=" hidden lg:flex md:flex">
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
