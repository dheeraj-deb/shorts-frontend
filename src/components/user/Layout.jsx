import React from "react";
import { Sidebar, Header, MobileNav, Rightbar } from "./index";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <MobileNav />
      <div className=" w-100 pt-16 flex justify-center space-x-2.5">
        <div className="w-72 hidden md:block">
          <Sidebar />
        </div>
        <div className=" w-full md:w-3/5">{children}</div>
        <div className="hidden w-72 md:flex">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default Layout;
