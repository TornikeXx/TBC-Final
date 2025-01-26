import { Link } from "react-router-dom";
import Petters from "../../assets/logo.svg";
import { MAIN_PATHS } from "../../routes/main/index.enum";

const Logo = ({ width = 119, height = 46 }) => {
  return (
    <Link to={MAIN_PATHS.HOME}>
      <img width={width} height={height} src={Petters} alt="logo" />
    </Link>
  );
};

export default Logo;
