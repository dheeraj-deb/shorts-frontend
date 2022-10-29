import React, { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Post } from "../../components/user/index";
import Layout from "../../components/user/Layout";

import Posts from '../../components/user/Posts'

function Home() {
  return (
    <>
      <Layout children={<Posts />} />
    </>
  );
}

export default Home;
