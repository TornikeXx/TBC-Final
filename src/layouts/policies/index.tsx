import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import PoliciesHeader from "../../components/PoliciesHeader";

const PoliciesLayout: React.FC = () => {
  return (
    <>
      <div className="flex  flex-col min-h-[100svh] pb-[24px] tablet:pb-[30px] bg-[#1E1F24]">
        <PoliciesHeader />
        <Outlet />
        <div className="hidden tablet:block px-[24px] tablet:px-[60px] mt-auto pt-[24px]">
          <Footer fromPolicies />
        </div>{" "}
      </div>
    </>
  );
};

export default PoliciesLayout;
