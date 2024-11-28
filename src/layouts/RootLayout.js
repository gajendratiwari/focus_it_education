import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../utils/ScrollToTop";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
export default RootLayout;
