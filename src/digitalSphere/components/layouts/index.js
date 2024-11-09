import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
const Layouts = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, [pathname]);

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layouts;
