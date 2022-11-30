import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../services/reducres/user/userSlice.js";
import SideProfile from "../sideProfile/SideProfile.jsx";
import Suggestion from "../suggestion/Suggestion.jsx";

function Sidebar() {
  const dispatch = useDispatch()
  const authData = useSelector((state) => state.auth);

  useEffect(() => {
    const fetch = () => {
      dispatch(fetchUser(authData?.user?._id))
    }
    fetch()
  }, [])

  const { user } = useSelector((state) => state.user)


  return (
    <div className=" top-[4.5rem] ">
      {user ? (
        <div>
          <div>
            <SideProfile user={user} />
            <hr />
          </div>
          <div className="mb-2">
            <Suggestion />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;
