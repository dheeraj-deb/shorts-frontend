import React from "react";
import { Header, MobileNav, ProfileC } from "../../components/user/index";
import { useParams } from "react-router-dom"

function Profile() {

  let { id } = useParams()

  return (
    <div>
      <Header />
      <MobileNav />
      <ProfileC id={id} />
    </div>
  );
}

export default Profile;
