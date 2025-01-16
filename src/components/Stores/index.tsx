import { useTranslation } from "react-i18next";
import AppleIcon from "../../icons/AppleIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import BgImage from "../BgImage";

const Stores = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-[260px] xsm:h-[220px] tablet:h-[400px]">
      <BgImage />
      <section
        className="w-[96%] xxsm:w-max bg-[#FAF8F0] rounded-[12px] tablet:rounded-[24px] px-[10px] tablet:px-[24px] py-[8px]
                    tablet:py-[16px] bottom-[8px] tablet:bottom-[24px] left-[8px] tablet:left-[29px] absolute"
      >
        <h2 className="text-[14px] text-black tablet:text-[22px] font-bold whitespace-pre-line">
          {t("pets_meetup")}
        </h2>

        <p
          className="text-[12px] text-[#1E1F24] tablet:text-[18px] font-normal whitespace-pre-line
                     mt-[4px] tablet:mt-[10px]"
        >
          {t("download_petters_app")}
        </p>

        <div className="flex gap-[8px] xxsm:gap-[16px] mt-[8px] tablet:mt-[16px]">
          <a target="_blank" rel="noreferrer">
            <button
              className="w-[50%] xxsm:w-[126px] h-[48px] flex items-center rounded-[6px] gap-[8px] 
                       px-[10px] border border-[#A6A6A6] bg-[#1E1F24]"
            >
              <AppleIcon />
              <div>
                <p className="text-[8px] xxsm:text-[9px] text-[#FFF] font-medium whitespace-nowrap">
                  {t("download_on_the")}
                </p>
                <p
                  className="text-[10px] xxsm:text-[13px] text-left text-[#FFF] font-medium leading-none 
                whitespace-nowrap"
                >
                  App Store
                </p>
              </div>
            </button>
          </a>
          <a target="_blank" rel="noreferrer">
            <button
              className="w-[50%] xxsm:w-[126px] h-[48px] flex items-center rounded-[6px] gap-[8px] 
                       px-[10px] border border-[#A6A6A6] bg-[#1E1F24]"
            >
              <GoogleIcon />
              <div>
                <p className="text-[8px] xxsm:text-[9px] text-[#FFF] font-medium whitespace-nowrap">
                  {t("download_on_the")}
                </p>
                <p className="text-[10px] xxsm:text-[13px] text-[#FFF] font-medium leading-none whitespace-nowrap">
                  Google Play
                </p>
              </div>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Stores;
