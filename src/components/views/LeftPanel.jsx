import React, { useState } from "react";
import InfoSearchArea from "./left-aside/InfoSearchArea";
import UsersMessageArea from "./left-aside/UsersMessageArea";
import SearchNewUserPopup from "../ui/left-side-panel/SearchNewUserPopup";

function LeftPanel() {
  const [newUser, setNewUser] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function handleNewChat() {
    setNewUser(true);
    console.log("new chat");
  }

  function onPopupClose() {
    setNewUser(false);
  }

  return (
    <>
      <div className="w-1/4 relative">
        <div className={`h-full flex flex-col ${newUser ? "blur-sm" : ""}`}>
          <InfoSearchArea
            handleNewChat={handleNewChat}
            isMenuVisible={isMenuVisible}
            setIsMenuVisible={setIsMenuVisible}
          />
          <UsersMessageArea
            isPopupVisible={newUser}
            isMenuVisible={isMenuVisible}
          />
        </div>

        {newUser && (
          <div className="absolute z-50 left-1/2 translate -translate-x-1/2 top-20 drop-shadow-2xl">
            <SearchNewUserPopup onPopupClose={onPopupClose} />
          </div>
        )}
      </div>
    </>
  );
}

export default LeftPanel;
