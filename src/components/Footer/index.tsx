import React from "react";
import SocialIcons from "../../icons/SocialIcons";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface FooterProps {
  fromPolicies?: boolean;
}

const Footer: React.FC<FooterProps> = ({ fromPolicies = false }) => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <footer
      className={`flex flex-col sm:flex-row gap-[24px] sm:gap-[4px] sm:justify-between 
                  px-[16px] tablet:px-[48px] py-[24px] dark:bg-[#1E1F24] dark:border-[2px] dark:border-[#fff] rounded-[30px] ${
                    fromPolicies
                      ? "bg-inherit border border-[#FAF8F0]  "
                      : "bg-[#FAF8F0]"
                  }`}
    >
      <div>
        <p
          className={`text-[16px] tablet:text-[20px] dark:text-[#FAF8F0]  font-bold ${
            fromPolicies ? "text-[#FAF8F0]" : "text-black"
          }`}
        >
          {t("legal")}
        </p>

        <div className="flex flex-col xsm:flex-row xsm:items-center gap-[20px] tablet:gap-[40px] mt-[14px]">
          <div
            className={`flex flex-col gap-[14px] dark:text-[#FAF8F0CC] ${
              fromPolicies ? "text-[#FAF8F0CC]" : "text-[#1E1F24CC]"
            }`}
          >
            <Link
              to="community-guidelines"
              className={`text-[14px] tablet:text-[16px] font-semibold hover:text-[#5BBA66] ${
                location.pathname === "/community-guidelines"
                  ? "text-[#5BBA66]"
                  : ""
              }`}
            >
              {t("community_guidelines")}
            </Link>
            <Link
              to="safety-tips"
              className={`text-[14px] tablet:text-[16px] font-semibold hover:text-[#5BBA66] ${
                location.pathname === "/safety-tips" ? "text-[#5BBA66]" : ""
              }`}
            >
              {t("safety_tips")}
            </Link>
            <Link
              to="terms-of-service"
              className={`text-[14px] tablet:text-[16px] font-semibold hover:text-[#5BBA66] ${
                location.pathname === "/terms-of-service"
                  ? "text-[#5BBA66]"
                  : ""
              }`}
            >
              {t("terms_of_service")}
            </Link>
          </div>
          <div
            className={`flex flex-col gap-[14px] dark:text-[#FAF8F0CC] ${
              fromPolicies ? "text-[#FAF8F0CC]" : "text-[#1E1F24CC]"
            }`}
          >
            <Link
              to="privacy-policy"
              className={`text-[14px] tablet:text-[16px] font-semibold hover:text-[#5BBA66] ${
                location.pathname === "/privacy-policy" ? "text-[#5BBA66]" : ""
              }`}
            >
              {t("privacy_policy")}
            </Link>
            <Link
              to="privacy-preferences"
              className={`text-[14px] tablet:text-[16px] font-semibold hover:text-[#5BBA66] ${
                location.pathname === "/privacy-preferences"
                  ? "text-[#5BBA66]"
                  : ""
              }`}
            >
              {t("privacy_preferences")}
            </Link>
            <Link
              to="licenses"
              className={`text-[14px] tablet:text-[16px] font-semibold hover:text-[#5BBA66] ${
                location.pathname === "/licenses" ? "text-[#5BBA66]" : ""
              }`}
            >
              {t("licenses")}
            </Link>
          </div>
        </div>
      </div>

      <div>
        <p
          className={`text-[16px] tablet:text-[20px] dark:text-[#FAF8F0] font-bold ${
            fromPolicies ? "text-[#FAF8F0]" : "text-black"
          }`}
        >
          {t("social_media")}
        </p>

        <div className="flex items-center gap-[6px] mt-[14px]">
          {[
            { icon: "facebook", color: "#EDF4FF" },
            { icon: "instagram", color: "#FAF5FC" },
            { icon: "tiktok", color: "#F6F6F6" },
            { icon: "youtube", color: "#F6F6F6" },
            { icon: "linkedin", color: "#EEFAFF" },
            { icon: "gmail", color: "#F9F9F9" },
          ].map((item) => (
            <a target="_blank" rel="noreferrer" key={item.icon}>
              <button
                className="w-[36px] h-[36px] flex items-center justify-center"
                style={{
                  backgroundColor: fromPolicies ? "#424450" : item.color,
                }}
              >
                <SocialIcons
                  name={
                    item.icon as
                      | "facebook"
                      | "gmail"
                      | "linkedin"
                      | "youtube"
                      | "tiktok"
                      | "instagram"
                  }
                  fill={
                    item.icon === "tiktok" && !fromPolicies
                      ? "#000000"
                      : undefined
                  }
                />
              </button>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
