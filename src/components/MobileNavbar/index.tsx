import React, { useState } from "react";
import Logo from "../Logo";
import MenuIcon from "../../icons/MenuIcon.svg";
import BurgerDrawer from "../BurgerDrawer";

const MobileNavbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header className="h-[50px] flex justify-between items-center bg-[#1E1F24] rounded-[40px] mb-[10px] px-[24px] ">
      <h1>
        <Logo height={36} width={92} />
      </h1>

      <button onClick={() => setOpen(!open)} className="cursor-pointer">
        <img src={MenuIcon} alt="" />
      </button>

      <BurgerDrawer open={open} toggleDrawer={toggleDrawer} />
    </header>
  );
};

export default MobileNavbar;
