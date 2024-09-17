import React from "react";
import ChatAppInfo from "../../ui/left-side-panel/ChatAppInfo";
import SearchBar from "../../ui/left-side-panel/SearchBar";

function InfoSearchArea({ handleNewChat }) {
  return (
    <>
      <div>
        <ChatAppInfo handleNewChat={handleNewChat} />
        <SearchBar />
      </div>
    </>
  );
}

export default InfoSearchArea;
