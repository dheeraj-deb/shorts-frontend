import React from "react";
import {
  Layout,
  ChatC,
  UserList,
  Header,
  MobileNav,
} from "../../components/user/index";

function Chat() {
  return (
    <>
      <Header />
      <MobileNav />
      <div className="pt-[4.5rem]">
        <ChatC />
      </div>
    </>
  );
}

export default Chat;
