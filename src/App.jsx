import Home from "./components/Home";
import ContextProvider from "./components/context/Context";
import { ToastContainer } from "react-toastify";
import { Graph } from "./components/Graph";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Login from "./pages/Login";
import Register, { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import Map from "./components/Map";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
        errorElement: <Error />,
      },
      {
        path: "/graph",
        element: <Graph />,
        errorElement: <Error />,
      },

      {
        path: "map",
        element: <Map />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,

    action: RegisterAction,
  },
  {
    path: "/login",
    element: <Login />,
    action: LoginAction,
    errorElement: <Error />,
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
