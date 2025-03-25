import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ContextProvider from "./components/Context";
import { toast, ToastContainer } from "react-toastify";
import { Graph } from "./components/Graph";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Login from "./pages/Login";
import Register, { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/graph",
        element: <Graph />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
    action: RegisterAction,
  },
  {
    path: "/login",
    element: <Login />,
    action: LoginAction,
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
