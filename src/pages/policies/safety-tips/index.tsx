import { useTranslation } from "react-i18next";

export default function SafetyTips() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="px-[24px] tablet:px-[60px]">
        <h1 className="text-[18px] tablet:text-[28px] text-[#FFF] font-extrabold">
          {t("safety_tips")}
        </h1>

        <p
          className="text-[16px] tablet:text-[20px] text-[#FFF] font-semibold
                       mt-[12px] tablet:mt-[18px] mb-[12px] tablet:mb-[12px]"
        >
          {t("petters_safety_tips")}
        </p>

        <p className="text-[14px] tablet:text-[18px] text-[#FAF8F0CC] font-normal">
          {t("your_safety")}
        </p>

        <div className="mt-[8px] tablet:mt-[32px] mb-[30px]">
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">1.</span> {t("protect_your_information")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">2.</span> {t("meet_in_public_places")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">3.</span> {t("trust_your_instincts")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">4.</span> {t("verify_profiles")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">5.</span>
            {t("report_suspicious_activity")}
          </p>
        </div>

        <p
          className={`text-[16px] tablet:text-[18px] text-[#FAF8F0CC] ${
            i18n?.language !== "ge" ? "tablet:max-w-[450px]" : ""
          }`}
        >
          {t("secure_experience")}
        </p>
      </div>
    </>
  );
}
