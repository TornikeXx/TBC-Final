import { Link } from "react-router-dom";
import { MAIN_PATHS } from "../../routes/main/index.enum";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <span className="text-black">
        Back to{" "}
        <Link className="text-green" to={MAIN_PATHS.HOME}>
          HOME
        </Link>{" "}
      </span>
    </div>
  );
};
export default NotFoundPage;
