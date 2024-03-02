import { Outlet } from "react-router-dom";
import { Footer, Navbar, NavBottomMobile } from "./components";

export default function Layout() {
  function handleToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="text-[#0505af] scroll-smooth ">
      <Navbar handleToTop={handleToTop} />
      <NavBottomMobile handleToTop={handleToTop} />
      <Outlet />
      <Footer handleToTop={handleToTop} />
    </div>
  );
}
