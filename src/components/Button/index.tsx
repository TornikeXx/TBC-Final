import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  disabled,
  children,
  ...rest
}) => {
  return (
    <MuiButton
      className={`w-full h-[56px] rounded-[28px] !text-[#FFF] bg-[#5BBA66] text-[18px] !normal-case
                hover:text-[#1E1F24] hover:bg-[#FAF8F0] font-bold !leading-[0] ${className}`}
      onClick={onClick}
      disabled={disabled}
      sx={{}}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
