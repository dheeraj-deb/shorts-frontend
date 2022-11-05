import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetcUserData} from "../../services/reducres/auth/authSlice"
import { Posts, Sidebar, Layout } from "../../components/user/index";

function Home() {
  const dispatch =  useDispatch()
  
  return (
    <>
      <Layout left={<Sidebar />} children={<Posts />} />
    </>
  );
}

export default Home;
