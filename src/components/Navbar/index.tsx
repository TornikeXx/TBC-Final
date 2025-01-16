import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";

const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <nav className="h-[70px] flex items-center justify-between mb-[32px] bg-[#1E1F24]  rounded-[40px] px-[32px]">
      <div className="flex items-center gap-[30px] lg:gap-[40px]">
        <h1>
          <Logo />
        </h1>
        <ul className="flex gap-[24px] lg:gap-[36px] text-[#FAF8F0] font-bold text-[18px]">
          <li className="cursor-pointer">
            <Link
              to="/"
              className={`hover:text-[#5BBA66] ${
                location.pathname === "/" ? "text-[#5BBA66]" : ""
              }`}
            >
              {t("home")}
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="explore"
              className={`hover:text-[#5BBA66] dark:text-black ${
                location.pathname === "explore" ? "text-[#5BBA66]" : ""
              }`}
            >
              {t("explore_pets")}
            </Link>
          </li>
        </ul>
      </div>
      <div className="rounded-l-[40px] flex flex-row items-center p-0 m-0 gap-[16px]">
        <button
          onClick={() => navigate("contact-us")}
          className={`   bg-[#5BBA66] text-[18px] !normal-case
                hover:text-[#1E1F24] hover:bg-[#FAF8F0] font-bold !leading-[0]   !rounded-[40px] w-[185px] h-[48px] text-white 
                       hover:!transition-colors !duration-300 ${
                         location.pathname === "/contact-us"
                           ? "!text-[#1e1f24] !transition-colors"
                           : ""
                       }`}
        >
          {t("contact_us")}
        </button>

        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
export default Navbar;
