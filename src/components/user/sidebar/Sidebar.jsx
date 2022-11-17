import React from "react";
import { useSelector } from "react-redux";
import SideProfile from "../sideProfile/SideProfile.jsx";
import Suggestion from "../suggestion/Suggestion.jsx";

function Sidebar() {
  const { user } = useSelector((state) => state.user);

  console.log("user", user);

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
