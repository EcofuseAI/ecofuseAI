import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <Outlet />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default MainLayout;
