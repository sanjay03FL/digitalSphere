import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import styles from "../style.module.css";
import Footer from "./footer";

const Layouts = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layouts;
