import Image2 from "../../assets/pets.svg";
import Image3 from "../../assets/cat-with-hearts.svg";
import Image4 from "../../assets/cat.svg";

import { Box } from "@mui/material";
import EclipseIcon from "../../icons/EclipseIcon";
import { useTranslation } from "react-i18next";

const InfoCards = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      className="flex gap-[16px] tablet:gap-[32px] my-[24px] tablet:my-[54px] sm:mb-[31px] sm:mt-[21px]"
      sx={{
        "@media (max-width: 980px)": {
          flexWrap: "wrap",

          "& .card": {
            "& h3": {
              fontSize: "20px",
            },
            "& p": {
              fontSize: "16px",
            },
          },
        },

        "@media (max-width: 500px)": {
          "& .card": {
            "& h3": {
              fontSize: "16px",
            },
            "& p": {
              fontSize: "14px",
            },
          },
        },
      }}
    >
      <div
        className="min-w-[274px]  flex flex-col flex-1 sm:rounded-[20px] rounded-[40px] 
                   px-[32px] bg-green relative card"
      >
        <div className="absolute left-0">
          <EclipseIcon left />
        </div>
        <div className="absolute right-0 top-4">
          <EclipseIcon right />
        </div>

        <div className="mt-[38px] mb-[14px]">
          <h3 className="text-[28px] xl:text-[34px] text-[#F6EBDE] font-extrabold pr-[50px]">
            {t("social_network")}
          </h3>

          <p className="text-[18px] text-[#F6EBDE] font-semibold mt-[20px]">
            {t("stay_in_touch")}
          </p>
        </div>

        <div className="w-full flex justify-center mt-auto pb-[24px]">
          <img src={Image2} alt="pets" />
        </div>
      </div>

      <div
        className="min-w-[274px]  flex flex-col flex-1 sm:rounded-[20px] rounded-[40px] 
                   px-[32px] bg-[#FAF8F0] relative card"
      >
        <div className="absolute left-0">
          <EclipseIcon left stroke="#A7A1884D" strokeOpacity={1} />
        </div>
        <div className="absolute right-0 top-4">
          <EclipseIcon right stroke="#A7A1884D" strokeOpacity={1} />
        </div>

        <div className="mt-[38px] mb-[14px]">
          <h3 className="text-[28px] xl:text-[34px] text-[#1E1F24] font-extrabold pr-[30px]">
            {t("stay_connected")}
          </h3>

          <p className="text-[18px] text-[#1E1F24] font-semibold mt-[20px]">
            {t("explore")}
          </p>
        </div>

        <div className="w-full flex justify-center mt-auto pb-[24px]">
          <img src={Image3} alt="pets" />
        </div>
      </div>

      <div
        className="min-w-[274px]  flex flex-col flex-1 sm:rounded-[20px] rounded-[40px] 
                   px-[32px] bg-[#261D2A] relative card"
      >
        <div className="absolute left-0">
          <EclipseIcon left />
        </div>
        <div className="absolute right-0 top-4">
          <EclipseIcon right />
        </div>

        <div className="mt-[38px] mb-[14px]">
          <h3 className="text-[28px] xl:text-[34px] text-[#F6EBDE] font-extrabold pr-[50px]">
            {t("meet_the_pets")}
          </h3>

          <p className="text-[18px] text-[#F6EBDE] font-semibold mt-[20px]">
            {t("nearby_pets")}
          </p>
        </div>

        <div className="w-full flex justify-center mt-auto pb-[24px]">
          <img src={Image4} alt="pets" />
        </div>
      </div>
    </Box>
  );
};

export default InfoCards;
