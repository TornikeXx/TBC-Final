import { useState } from "react";
import Logo from "../Logo";
import BurgerDrawer from "../BurgerDrawer";
import MenuIcon from "../../icons/MenuIcon.svg";

const PoliciesHeader = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header
      className="h-[50px] tablet:h-[60px] flex items-center justify-between border-b border-b-[#FFF]
                 px-[24px] tablet:px-[60px] py-[40px] mb-[24px] bg-[#1E1F24] sticky top-0 left-0"
    >
      <Logo />

      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer block tablet:hidden"
      >
        <img src={MenuIcon} alt="" />
      </button>

      <BurgerDrawer open={open} toggleDrawer={toggleDrawer} />
    </header>
  );
};

export default PoliciesHeader;
