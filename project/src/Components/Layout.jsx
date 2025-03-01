import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutBanner = () => {
  return (
    <section className="">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default LayoutBanner;
