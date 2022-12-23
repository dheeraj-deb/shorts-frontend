import React from "react";
import { Layout, Posts, Sidebar } from "../../components/user";
import Notification from "./Notification";



function Home() {

  return (
    <>
      <Layout left={<Sidebar />} children={<Posts />} right={<Notification />} />
    </>
  );
}

export default Home;
