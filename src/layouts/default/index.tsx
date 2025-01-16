import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DefaultLayout: React.FC = () => {
  return (
    <>
      <div className="p-[12px] xsm:p-[16px] tablet:p-[32px]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
