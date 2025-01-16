import { useTranslation } from "react-i18next";

export default function CommunityGuidelines() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="px-[24px] tablet:px-[60px]">
        <h1 className="text-[18px] tablet:text-[28px] text-[#FFF] font-extrabold">
          {t("community_guidelines")}
        </h1>

        <p
          className="text-[16px] tablet:text-[20px] text-[#FFF] font-semibold
                       mt-[12px] tablet:mt-[18px] mb-[12px] tablet:mb-[12px]"
        >
          {t("what_you_need_know")}
        </p>

        <p className="text-[14px] tablet:text-[18px] text-[#FAF8F0CC] font-normal">
          {t("welcome_community_positive_experience")}
        </p>

        <div className="mt-[8px] tablet:mt-[32px] mb-[30px]">
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">1.</span> {t("be_respectful")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">2.</span> {t("keep_it_friendly")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">3.</span> {t("no_spam")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">4.</span> {t("stay_safe")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">5.</span> {t("report_inappropriate")}
          </p>
        </div>

        <p
          className={`text-[16px] tablet:text-[18px] text-[#FAF8F0CC] ${
            i18n?.language !== "ge" ? "tablet:max-w-[450px]" : ""
          }`}
        >
          {t("work_together")}
        </p>
      </div>

      <div className="hidden tablet:block px-[24px] tablet:px-[60px] mt-auto pt-[24px]"></div>
    </>
  );
}
