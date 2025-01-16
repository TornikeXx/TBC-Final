import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-[24px] tablet:px-[60px]">
        <h1 className="text-[18px] tablet:text-[28px] text-[#FFF] font-extrabold">
          {t("privacy_policy")}
        </h1>

        <p className="text-[14px] tablet:text-[18px] mt-[12px] tablet:mt-[18px] text-[#FAF8F0CC] font-normal">
          {t("protecting_your_privacy")}
        </p>

        <div className="mt-[8px] tablet:mt-[32px] mb-[30px]">
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">1.</span> {t("information_we_collect")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">2.</span> {t("how_we_use_information")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">3.</span> {t("information_sharing")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">4.</span> {t("security_measures")}
          </p>
          <p className="flex gap-[4px] text-[14px] tablet:text-[18px] text-[#FAF8F0] mb-[12px]">
            <span className="block">5.</span> {t("your_choices")}
          </p>
        </div>

        <p className="text-[16px] tablet:text-[18px] text-[#FAF8F0CC]">
          {t("by_using_petters")}
        </p>
      </div>
    </>
  );
}
