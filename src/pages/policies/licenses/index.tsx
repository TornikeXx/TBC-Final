import { useTranslation } from "react-i18next";

export default function Licenses() {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-[24px] tablet:px-[60px]">
        <h1 className="text-[18px] tablet:text-[28px] text-[#FFF] font-extrabold">
          {t("licenses")}
        </h1>

        <p className="text-[14px] tablet:text-[18px] mt-[12px] tablet:mt-[18px] text-[#FAF8F0CC] font-normal">
          {t("third_party_licenses")}
        </p>

        <p className="text-[14px] tablet:text-[18px] mt-[12px] tablet:mt-[18px] text-[#FAF8F0CC] font-normal">
          {t("important_licenses")}
        </p>

        <p className="text-[14px] tablet:text-[18px] mt-[12px] tablet:mt-[18px] text-[#FAF8F0CC] font-normal">
          {t("licenses_questions")}
        </p>
      </div>
    </>
  );
}
