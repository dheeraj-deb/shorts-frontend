import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "../pages/auth/admin/SignIn";
import Header from "../components/admin/header/Header";
import Navbar from "../components/admin/navbar/Navbar";
import LeftPart from "../components/admin/leftPart/LeftPart";
import RightPart from "../components/admin/rightPart/RightPart";
import Table from "../components/admin/table/Table";
function AdminRoutes() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/admin/login" element={<SignIn />} />
        </Routes>
      </Router> */}
      <Header />
      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <Navbar />
        <div className="grid grid-cols-1 xl:grid-cols-5 w-full col-span-10">
          {/* left part */}
          <LeftPart />
          {/* right part */}
          <RightPart />
        </div>

      </div>
    </>
  );
}

export default AdminRoutes;
