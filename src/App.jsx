import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ContextProvider, { useGlobalContext } from "./components/Context";
import { toast, ToastContainer } from "react-toastify";
import { Graph } from "./components/Graph";
import Footer from "./components/Footer";
import { createBrowserRouter } from "react-router";
import { HomeLayout, Login } from "./pages";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        element: <Home />,
        index: true,
        // loader: LandingLoader,
        // errorElement: <ErrorElement />,
      },
      {
        element: <Graph />,
        index: true,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ContextProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-center" />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
