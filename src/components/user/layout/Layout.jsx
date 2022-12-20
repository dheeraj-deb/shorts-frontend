import React, { useEffect } from "react";
import { Header, MobileNav } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../services/reducres/user/userSlice";


function Layout({ left, children, right }) {
  const dispatch = useDispatch()
  const authData = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.auth)


  useEffect(() => {
    dispatch(fetchUser(user?._id))
  }, [])

  return (
    <div>
      <Header />
      <MobileNav />
      <div className="w-100 pt-[4.5rem] pl-0 px-4 pr-2 md:pr-0 flex justify-center space-x-2.5">
        {authData.user ? (<div className="w-72 hidden md:block relative">{left}</div>) : (null)}
        <div className=" w-[100%] md:w-2/4 mb-20 px-2 relative">{children}</div>
        {authData.user ? (<div className="hidden w-72 lg:block relative">{ }</div>) : (null)}

      </div>
    </div>
  );
}

export default Layout;
