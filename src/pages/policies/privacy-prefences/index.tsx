import { useTranslation } from "react-i18next";

export default function PrivacyPreferences() {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-[24px] tablet:px-[60px]">
        <h1 className="text-[18px] tablet:text-[28px] text-[#FFF] font-extrabold">
          {t("privacy_preferences")}
        </h1>

        <p className="text-[14px] tablet:text-[18px] mt-[12px] tablet:mt-[18px] text-[#FAF8F0CC] font-normal">
          {t("at_petters")}
        </p>

        <p className="text-[14px] tablet:text-[18px] mt-[12px] tablet:mt-[18px] text-[#FAF8F0CC] font-normal">
          {t("this_includes")}
        </p>

        <p className="text-[14px] tablet:text-[18px] mt-[12px] tablet:mt-[18px] text-[#FAF8F0CC] font-normal">
          {t("if_you_have_questions")}
        </p>
      </div>
    </>
  );
}
