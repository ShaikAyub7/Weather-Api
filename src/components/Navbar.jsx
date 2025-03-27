import { useGlobalContext } from "./Context";
import { FaBarsStaggered } from "react-icons/fa6";
import ThemeIcon from "./ThemeIcon";
import Location from "./Location";
import { Link } from "react-router";
import NavLinks from "./NavLinks";
let date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();

const Navbar = () => {
  const { fetchWeatherByCity, setSearch, search, user, loading } =
    useGlobalContext();

  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm p-1">
        <div className="navbar-start">
          <div
            to={"/"}
            className="hidden lg:flex btn  text-3xl items-center bg-none"
            id="cloudlink"
          >
            CloudLink
          </div>
          <div className="navbar-center items-center justify-center px-8 hidden md:flex lg:flex ml-12 font-normal">
            <NavLinks />
          </div>
          <div className="dropdown">
            <label htmlFor="" tabIndex={0} className="btn btn-ghost  lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-200 w-56 h-150 relative "
            >
              <div className="w-full h-screen bg-gray-900 text-white  items-center py-6 relative">
                <div className="mt-6 flex  justify-center items-center w-full mb-5">
                  <p className="text-sm font-light">Theme:</p>
                  <div className="mt-1 ml-2 cursor-pointer p-1 rounded-full bg-gray-800 hover:bg-gray-700 transition-all">
                    <ThemeIcon />
                  </div>
                </div>

                <div className="mt-4 flex items-center w-full justify-center">
                  <Location />
                </div>
                <hr className="w-1/2 my-1 border-gray-700" />
                <div className="absolute bottom-4 text-sm text-gray-400">
                  🕒 Time: {`${hour} : ${minute} : ${seconds}`}
                </div>
              </div>
            </ul>
          </div>
        </div>

        <div className="flex gap-2 navbar-end">
          <div className="text-center  items-center justify-center px-8">
            {loading ? (
              <>
                <span className="loading loading-ring loading-sm"></span>
              </>
            ) : (
              <div className="hidden lg:flex lg:font-medium">
                <Location />
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Search city..."
            value={search}
            className="input input-bordered w-24 md:w-auto mr-1"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-primary mr-2"
            onClick={() => fetchWeatherByCity(search)}
          >
            Search
          </button>
          <div className=" hidden lg:flex md:hidden">
            <ThemeIcon />
          </div>
        </div>
        <div className="flex items-center justify-center mr-2">
          {user ? (
            <>
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-8 rounded-full">
                  <span className="text-xs">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center">
              <Link to={"/register"} className="btn btn-accent rounded-lg">
                login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
