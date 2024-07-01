import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Compnent/Navbar";
import Footer from "./Compnent/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
