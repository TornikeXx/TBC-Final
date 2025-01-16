import { Link } from "react-router-dom";
import Petters from "../../assets/logo.svg";

const Logo = ({ width = 119, height = 46 }) => {
  return (
    <Link to="/">
      <img width={width} height={height} src={Petters} alt="logo" />
    </Link>
  );
};

export default Logo;
