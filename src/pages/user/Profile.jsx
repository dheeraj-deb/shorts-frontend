import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, MobileNav, ProfileC } from "../../components/user/index";
import { fetchUser } from "../../services/reducres/user/userSlice";

function Profile() {


  const dispatch = useDispatch()
  const authData = useSelector((state) => state.auth)


  useEffect(() => {
    dispatch(fetchUser(authData.user._id))
  }, [])

  const { user } = useSelector((state) => state.user)

  return (
    <div>
      <Header />
      <MobileNav />
      <ProfileC user={user} />
    </div>
  );
}

export default Profile;
