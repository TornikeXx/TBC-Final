import React from "react";

interface EclipseIconProps {
  left?: boolean;
  right?: boolean;
  stroke?: string;
  strokeOpacity?: string | number;
}
const EclipseIcon: React.FC<EclipseIconProps> = (props) => {
  return (
    <>
      {props?.left && (
        <svg
          width="68"
          height="48"
          viewBox="0 0 68 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M65 -13.5C65 18.7189 38.0044 45 4.5 45C-29.0044 45 -56 18.7189 -56 -13.5C-56 -45.7189 -29.0044 -72 4.5 -72C38.0044 -72 65 -45.7189 65 -13.5Z"
            stroke={props?.stroke || "#F1E5D5"}
            strokeOpacity={props?.strokeOpacity || "0.3"}
            strokeWidth="6"
          />
        </svg>
      )}
      {props?.right && (
        <svg
          width="44"
          height="196"
          viewBox="0 0 44 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 98C3 150.342 47.4193 193 102.5 193C157.581 193 202 150.342 202 98C202 45.6585 157.581 3 102.5 3C47.4193 3 3 45.6585 3 98Z"
            stroke={props?.stroke || "#F1E5D5"}
            strokeOpacity={props?.strokeOpacity || "0.3"}
            strokeWidth="6"
          />
        </svg>
      )}
    </>
  );
};

export default EclipseIcon;
