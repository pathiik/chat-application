import React from "react";
import UserMessageTab from "../../ui/left-side-panel/UserMessageTab";

function UserMessageArea({ isPopupVisible, isMenuVisible }) {
  return (
    <>
      <div
        className={`h-full overflow-y-auto overflow-x-hidden ${
          isPopupVisible ? "pointer-events-none overflow-hidden" : ""
        }
         ${isMenuVisible ? "pointer-events-none overflow-hidden" : ""}`}
      >
        <UserMessageTab />
        <UserMessageTab />
        <UserMessageTab />
        <UserMessageTab />
        <UserMessageTab />
        <UserMessageTab />
        <UserMessageTab />
        <UserMessageTab />
        <UserMessageTab />
        <UserMessageTab />
        <UserMessageTab />
        <UserMessageTab />
        <UserMessageTab />
        <UserMessageTab />
        <UserMessageTab />
      </div>
    </>
  );
}

export default UserMessageArea;
