import { useTranslation } from "react-i18next";
import Flags from "../../icons/Flags";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ge" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={changeLanguage}>
      <Flags flag={i18n.language as "en" | "ge"} />
    </button>
  );
};

export default LanguageSwitcher;
