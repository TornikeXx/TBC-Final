import React from "react";

interface ThemeIconsProps {
  theme: "light" | "dark";
}

const ThemeIcons: React.FC<ThemeIconsProps> = ({ theme }) => {
  return (
    <>
      {theme === "light" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="none"
          viewBox="0 0 36 36"
        >
          <circle cx="18" cy="18" r="12" fill="#808080" />
          <circle cx="22" cy="14" r="2" fill="#666666" />
          <circle cx="16" cy="20" r="1.5" fill="#666666" />
          <circle cx="20" cy="24" r="1" fill="#666666" />
        </svg>
      )}
      {theme === "dark" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="none"
          viewBox="0 0 36 36"
        >
          <circle cx="18" cy="18" r="8" fill="#808080" />
          <g stroke="#808080" strokeWidth="2">
            <line x1="18" y1="2" x2="18" y2="7" />
            <line x1="18" y1="29" x2="18" y2="34" />
            <line x1="2" y1="18" x2="7" y2="18" />
            <line x1="29" y1="18" x2="34" y2="18" />
            <line x1="5.636" y1="5.636" x2="9.071" y2="9.071" />
            <line x1="26.929" y1="26.929" x2="30.364" y2="30.364" />
            <line x1="5.636" y1="30.364" x2="9.071" y2="26.929" />
            <line x1="26.929" y1="9.071" x2="30.364" y2="5.636" />
          </g>
        </svg>
      )}
    </>
  );
};

export default ThemeIcons;
