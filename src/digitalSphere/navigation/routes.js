import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layouts from "../components/layouts";
import HomeModule from "../pages/homeModule";
import AboutUsModule from "../pages/aboutUsModule";
import ServiceModule from "../pages/serviceModule";
import BlogModule from "../pages/blogModule";
import ContactUsModule from "../pages/contactUsModule";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route index path="/" element={<HomeModule />} />
          <Route path="/aboutUs" element={<AboutUsModule />} />
          <Route path="/service" element={<ServiceModule />} />
          <Route path="/blog" element={<BlogModule />} />
          <Route path="/contactUs" element={<ContactUsModule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
