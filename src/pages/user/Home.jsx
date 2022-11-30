import React from "react";
import { Layout, Posts, Rightbar, Sidebar } from "../../components/user";


function Home() {

  return (
    <>
      <Layout left={<Sidebar />} children={<Posts />} right={<Rightbar />} />
    </>
  );
}

export default Home;
