import React from "react";
import { Sidebar, Header, MobileNav, Rightbar } from "./index";

function Layout({ left, children }) {
  return (
    <div>
      <Header />
      <MobileNav />
      <div className=" w-100 pt-[4.5rem] px-0 pr-2 md:pr-0 flex justify-center space-x-2.5">
        <div className="w-72 hidden md:block">{left}</div>
        <div className=" w-full md:w-1/2 mb-20">{children}</div>
        <div className="hidden w-72 md:flex">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default Layout;
