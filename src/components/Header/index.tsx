import { useMediaQuery } from "@mui/material";
import MobileNavbar from "../MobileNavbar";
import Navbar from "../Navbar";

const Header = () => {
  const isTablet = useMediaQuery("(max-width:900px)");

  return <>{isTablet ? <MobileNavbar /> : <Navbar />}</>;
};

export default Header;
