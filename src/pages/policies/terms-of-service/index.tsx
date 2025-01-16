import { useTranslation } from "react-i18next";

export default function TermsOfService() {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-[24px] tablet:px-[60px]">
        <h1 className="text-[18px] tablet:text-[28px] text-[#FFF] font-extrabold">
          {t("terms_of_service")}
        </h1>

        <p className="text-[14px] tablet:text-[18px] mt-[12px] tablet:mt-[18px] text-[#FAF8F0CC] font-normal">
          {t("welcome_terms_of_services")}
        </p>

        <div className="mt-[8px] tablet:mt-[32px] mb-[30px]">
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">1.</span> {t("use_our_services")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">2.</span> {t("user_accounts")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">3.</span> {t("user_content")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">4.</span> {t("prohibited_conduct")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">5.</span> {t("privacy_outlines")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">6.</span> {t("modifications_to_terms")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">7.</span> {t("terminate_or_suspense")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">8.</span>{" "}
            {t("contact_if_you_have_questions")}
          </p>
        </div>

        <p className="flex gap-[4px] text-[16px] tablet:text-[18px] text-[#FAF8F0CC]">
          {t("agree_with_terms")}
        </p>
      </div>
    </>
  );
}
