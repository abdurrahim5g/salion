import { Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";

const Frontend = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Frontend;
