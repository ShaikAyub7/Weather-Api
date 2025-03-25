import { useGlobalContext } from "./Context";
import { FaLocationArrow } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import NavLinks from "./NavLinks";
import Location from "./Location";
import { formatTime12Hour } from "../data";
import Header from "./Header";

let date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();

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
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-200 w-46 h-96 relative"
            >
              <div className=" flex flex-col items-center justify-center place-content-center  lg:hidden ">
                <div className="flex items-center border-b-1 py-2.5">
                  Theme : <NavLinks />
                </div>
                <div className="flex items-center justify-baseline mt-2.5 border-b-1 py-2.5">
                  <Location />
                </div>
                <div className="flex items-center justify-baseline mt-2.5 border-b-1 py-2.5 absolute bottom-1">
                  Time : {`${hour}: ${minute} : ${seconds}`}
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
        <div className="flex gap-2 navbar-end">
          <input
            type="text"
            placeholder="Search city..."
            value={search}
            className="input input-bordered w-24 md:w-auto"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-primary mr-8"
            onClick={() => fetchWeatherByCity(search)}
          >
            Search
          </button>
          <div className=" hidden lg:flex md:hidden">
            <NavLinks />
          </div>
          {/* <div>
            <Link to={"/register"}>register</Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
