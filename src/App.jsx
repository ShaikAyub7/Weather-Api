import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ContextProvider, { useGlobalContext } from "./components/Context";
import { toast, ToastContainer } from "react-toastify";
import { Graph } from "./components/Graph";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function App() {
  return (
    <>
      <ContextProvider>
        <ToastContainer position="top-center" />
        <Navbar />
        {/* <Alert /> */}
        <Home />
        <Graph />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
