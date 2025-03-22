import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ContextProvider, { useGlobalContext } from "./components/Context";
import Chart from "./components/Chart";
import { createBrowserRouter, RouterProvider } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { Graph } from "./components/Graph";

function App() {
  toast.success("Welcome to cloudlink");
  return (
    <>
      <ContextProvider>
        <ToastContainer position="top-center" />
        <Navbar />
        <Home />
        <Graph />
        {/* <Chart forecastData={currentLocationData} /> */}
      </ContextProvider>
    </>
  );
}

export default App;
