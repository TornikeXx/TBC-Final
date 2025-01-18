import { TextField } from "@mui/material";
import React from "react";

interface InputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>; // Handle change event for input/textarea
  value: string; // Value of the input field
  placeholder?: string; // Optional placeholder
  multiline?: boolean; // Optional prop for multiline
  rows?: number; // Optional number of rows for multiline input
  borderRadius?: number; // Optional border radius (defaults to 28)
  type?: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  placeholder,
  multiline,
  rows,
  borderRadius = 28,
  type = "text",
}
) => {
  return (
    <TextField
      type={type}
      value={value}
      onChange={onChange}
      className="w-full"
      placeholder={placeholder}
      multiline={multiline}
      rows={rows}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: `${borderRadius}px`,
        },

        "& input": {
          color: "#F6EBDE",
          paddingLeft: "24px",
        },

        "& textarea": {
          color: "#F6EBDE",
          paddingLeft: "12px",
        },

        "& fieldset": {
          borderWidth: "1.5px !important",
          borderColor: "#F6EBDE !important",
        },
      }}
    />
  );
};

export default Input;
