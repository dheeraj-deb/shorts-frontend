import React from "react";
import { Header, MobileNav, Rightbar } from "../index";

function Layout({ left, children }) {
  return (
    <div>
      <Header />
      <MobileNav />
      <div className="w-100 pt-[4.5rem] px-4 pr-2 md:pr-0 flex justify-center space-x-2.5">
        <div className="w-72 hidden md:block relative">{left}</div>
        <div className=" w-auto mb-20 px-2 relative">{children}</div>
        <div className="hidden w-72 lg:block relative">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default Layout;
