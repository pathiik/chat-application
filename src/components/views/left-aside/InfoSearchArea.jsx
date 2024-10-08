import React from "react";
import ChatAppInfo from "../../ui/left-side-panel/ChatAppInfo";
import SearchBar from "../../ui/left-side-panel/SearchBar";

function InfoSearchArea({ handleNewChat, isMenuVisible, setIsMenuVisible }) {
  return (
    <>
      <div>
        <ChatAppInfo
          handleNewChat={handleNewChat}
          isMenuVisible={isMenuVisible}
          setIsMenuVisible={setIsMenuVisible}
        />
        <SearchBar />
      </div>
    </>
  );
}

export default InfoSearchArea;
