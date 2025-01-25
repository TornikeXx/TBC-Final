import { Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "../../icons/MenuIcon.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialIcons from "../../icons/SocialIcons";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "../ThemeSwitcher";
import { useAtomValue } from "jotai";
import { userAtom } from "../../store/auth";
import { getProfileInfo } from "../../supabase/account";

interface BurgerDrawerProps {
  open: boolean;
  toggleDrawer: (
    open: boolean,
  ) => (event?:object, reason?: "backdropClick" | "escapeKeyDown") => void;
}

const BurgerDrawer: React.FC<BurgerDrawerProps> = ({ open, toggleDrawer }) => {
  const user = useAtomValue(userAtom);

  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      getProfileInfo(user.user.id).then((res) => {
        if (res.data) {
          setAvatarUrl(res.data[0].avatar_url);
        }
      });
    }
  }, [user]);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer(false)}
      anchor={"right"}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "#1E1F24D9",
        },
      }}
    >
      <nav className="w-[260px] h-[130%] flex flex-col bg-[#1E1F24] pl-[15px] pr-[40px] pb-[32px]">
        <div className="flex items-center justify-end gap-[16px] pb-[32px] bg-[#1E1F24] sticky pt-[16px] top-0 left-0">
          {user ? (
            <button
              onClick={() => {
                navigate("/profile");
              }}
            >
              <img
                className="w-[40px]"
                src={avatarUrl ?? "https://via.placeholder.com/150"}
                alt=""
              />
            </button>
          ) : null}
          <LanguageSwitcher />
          <ThemeSwitcher />

          <button onClick={toggleDrawer(false)}>
            <img src={MenuIcon} alt="" />
          </button>
        </div>

        <ul
          className={`flex flex-col gap-[16px] text-[16px] pb-[24px] font-medium text-[#FAF8F0]
            `}
        >
          <li>
            <Link
              to="/"
              className={`hover:text-[#5BBA66] inline-block m-0 ${
                location.pathname === "/" ? "text-[#5BBA66]" : ""
              }`}
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              to="explore"
              className={`hover:text-[#5BBA66] inline-block m-0 ${
                location.pathname === "/explore" ? "text-[#5BBA66]" : ""
              }`}
            >
              {t("explore_pets")}
            </Link>
          </li>
        </ul>
        <hr className="border-t border-gray-300" />

        <ul
          className={`flex flex-col gap-[16px] text-[16px] pb-[24px] 
                     pt-[16px] font-medium text-[#FAF8F0] `}
        >
          <li>
            <Link
              to="community-guidelines"
              className={`hover:text-[#5BBA66] inline-block m-0 ${
                location.pathname === "/community-guidelines"
                  ? "text-[#5BBA66]"
                  : ""
              }`}
            >
              {t("community_guidelines")}
            </Link>
          </li>
          <li>
            <Link
              to="safety-tips"
              className={`hover:text-[#5BBA66] inline-block ${
                location.pathname === "/safety-tips" ? "text-[#5BBA66]" : ""
              }`}
            >
              {t("safety_tips")}
            </Link>
          </li>
          <li>
            <Link
              to="terms-of-service"
              className={`hover:text-[#5BBA66] inline-block ${
                location.pathname === "/terms-of-service"
                  ? "text-[#5BBA66]"
                  : ""
              }`}
            >
              {t("terms_of_service")}
            </Link>
          </li>
          <li>
            <Link
              to="privacy-policy"
              className={`hover:text-[#5BBA66] inline-block ${
                location.pathname === "/privacy-policy" ? "text-[#5BBA66]" : ""
              }`}
            >
              {t("privacy_policy")}
            </Link>
          </li>
          <li>
            <Link
              to="privacy-preferences"
              className={`hover:text-[#5BBA66] inline-block ${
                location.pathname === "/privacy-preferences"
                  ? "text-[#5BBA66]"
                  : ""
              }`}
            >
              {t("privacy_preferences")}
            </Link>
          </li>
          <li>
            <Link
              to="licenses"
              className={`hover:text-[#5BBA66] inline-block ${
                location.pathname === "/licenses" ? "text-[#5BBA66]" : ""
              }`}
            >
              {t("licenses")}
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-end">
          <button
            onClick={() => navigate("/contact-us")}
            className={`!text-[14px] bg-[#5BBA66] text-[#F6EBDE] !font-extrabold !rounded-[40px] w-[185px] h-[38px] text-white 
               hover:!bg-[#F6EBDE] hover:!text-[#1e1f24] hover:!transition-colors !duration-300 !leading-[1] ${
                 location.pathname === "/contact-us"
                   ? "!text-[#1e1f24]   !transition-colors"
                   : ""
               }`}
          >
            {t("contact_us")}
          </button>
        </div>
        <div className="h-full flex flex-col justify-end items-center gap-[11px] pt-[50px]">
          <div className="flex gap-[16px]">
            {["facebook", "instagram", "tiktok"].map((item) => (
              <a target="_blank" rel="noreferrer" key={item}>
                <button
                  className="w-[36px] h-[36px] flex items-center justify-center bg-[#292B35]"
                  key={item}
                >
                  {item === "instagram" ? (
                    <img
                      src={"/assets/insta.svg"}
                      width={20}
                      height={20}
                      alt="instagram"
                    />
                  ) : (
                    <SocialIcons
                      name={
                        item as
                          | "facebook"
                          | "gmail"
                          | "linkedin"
                          | "youtube"
                          | "tiktok"
                          | "instagram"
                      }
                    />
                  )}
                </button>
              </a>
            ))}
          </div>
          <div className="flex gap-[16px]">
            {["youtube", "linkedin", "gmail"].map((item) => (
              <a target="_blank" rel="noreferrer" key={item}>
                <button className="w-[36px] h-[36px] flex items-center justify-center bg-[#292B35]">
                  <SocialIcons
                    name={
                      item as
                        | "facebook"
                        | "gmail"
                        | "linkedin"
                        | "youtube"
                        | "tiktok"
                        | "instagram"
                    }
                  />
                </button>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </Drawer>
  );
};

export default BurgerDrawer;
