import ThemeIcons from "../../icons/ThemeIcons";
import { useTheme } from "./ThemeProvider";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme}>
      <ThemeIcons theme={theme} />
    </button>
  );
};

export default ThemeSwitcher;
