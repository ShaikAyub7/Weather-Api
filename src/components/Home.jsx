import { useGlobalContext } from "./context/Context";
import { useEffect, useMemo, useState } from "react";
import { WeatherIcon } from "./Icons";
import { Graph } from "./Graph";
import { CiMap } from "react-icons/ci";
import { Link } from "react-router";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import Map from "./Map";
import Help from "./DisasterHelp";
import HomePageData from "./HomePageData";
import ThemeIcon from "./ThemeIcon";
import { CiLocationOn } from "react-icons/ci";

const Home = () => {
  const {
    search,
    currentLocationData,
    fetchWeatherByCity,
    setSearch,
    cityImage,
    loading,
    user,
    data: searchData,
    fetchImagesOfCity,
  } = useGlobalContext();

  useEffect(() => {
    fetchImagesOfCity(searchData?.address || currentLocationData?.address);
  }, [searchData?.address, currentLocationData?.address]);

  const [activeTab, setActiveTab] = useState(0);
  const handleLogout = () => {
    localStorage.removeItem("user");
  };

  const tabs = [
    {
      name: <AiOutlineHome />,
      content: <HomePageData />,
    },
    {
      name: <VscGraph />,
      content: <Graph />,
    },
    {
      name: <CiMap />,
      content: <Map />,
    },
    {
      name: <IoIosHelpCircleOutline />,
      content: <Help />,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-2 min-h-screen mt-2 lg:mt-0">
      <aside className=" p-6 rounded-2xl shadow-xl flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-1">
            <input
              type="text"
              placeholder="Search for places..."
              className="border rounded-4xl px-3 py-2 w-full"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn btn-primary mr-0 rounded-4xl"
              onClick={() => fetchWeatherByCity(search)}
            >
              Search
            </button>
          </div>
          <div className="text-center mt-6">
            <WeatherIcon
              icon={
                searchData?.days?.[0]?.icon ||
                currentLocationData?.days?.[0]?.icon
              }
              color={"text-amber-500"}
              weather={
                searchData?.currentConditions?.conditions ??
                currentLocationData?.currentConditions?.conditions ??
                ""
              }
              size={" h-45 w-45 lg:w-100"}
              className="lg:w-96 sm:66 absolute"
            />
            <h2 className="text-4xl font-bold mt-2">
              {" "}
              {searchData?.currentConditions?.temp ||
                currentLocationData?.currentConditions?.temp}{" "}
              °C
            </h2>
            <p className="text-gray-500 mt-3">
              {" "}
              {searchData?.currentConditions?.conditions ||
                currentLocationData?.currentConditions?.conditions}
            </p>
          </div>
        </div>
        <div className="text-center mt-4 mb-4">
          <p className="text-sm text-gray-500 flex items-center justify-center">
            <CiLocationOn />
            {"  "} &nbsp;
            {searchData?.address || currentLocationData?.address}
          </p>
        </div>

        <div className="mt-3 rounded-4xl m-auto">
          <div>
            <img
              src={cityImage}
              alt=""
              className="rounded-4xl max-h-56 w-98 object-cover"
            />
          </div>
        </div>
      </aside>

      <main className="lg:col-span-2 p-6 rounded-2xl shadow-lg">
        <header className="flex justify-between items-center">
          <div className="flex space-x-1.5 lg:space-x-4 cursor-pointer">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 border-b-2 font-bold cursor-pointer ${
                  activeTab === index
                    ? "border-white dark:border-b-blue-900"
                    : "border-transparent"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className=" flex justify-around p-2">
            <ThemeIcon />

            <div className="flex items-center justify-center mr-2">
              {loading ? (
                <>loading</>
              ) : (
                <>
                  {user ? (
                    <>
                      <div className="dropdown dropdown-end">
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn btn-active btn-circle avatar"
                        >
                          <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-8 rounded-full">
                              <span className="text-xs">
                                {user?.name?.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          </div>
                        </div>
                        <ul
                          tabIndex={0}
                          className="menu menu-sm dropdown-content text-amber-50 bg-gray-600 rounded-box z-1 mt-3 w-52 p-2 shadow-xl"
                        >
                          <li>
                            <Link to={"/login"} onClick={handleLogout}>
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Link to={"/login"} className="btn btn-accent rounded-lg">
                        login
                      </Link>
                    </div>
                  )}{" "}
                </>
              )}
            </div>
          </div>
        </header>

        <div className="mt-1">{tabs[activeTab].content}</div>
      </main>
    </div>
  );
};

export default Home;
