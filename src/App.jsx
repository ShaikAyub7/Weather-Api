import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ContextProvider, { useGlobalContext } from "./components/Context";
import Chart from "./components/Chart";
import { createBrowserRouter, RouterProvider } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { Graph } from "./components/Graph";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <ContextProvider>
        <ToastContainer position="top-center" />
        <Navbar />
        <Alert />
        <Home />
        <Graph />
        {/* <Chart forecastData={currentLocationData} /> */}
      </ContextProvider>
    </>
  );
}

export default App;
