import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";

import Layouts from "../components/layouts";
import HomeModule from "../pages/homeModule";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route index path="/" element={<HomeModule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
