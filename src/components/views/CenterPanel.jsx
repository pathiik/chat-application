import React from "react";
import CurrentUserInfoPanel from "./central-area/CurrentUserInfoPanel";
import CurrentUserMessagesPanel from "./central-area/CurrentUserMessagesPanel";
import NewMessagePanel from "./central-area/NewMessagePanel";

function CenterPanel({ showChatDetails, isChatDetailsVisible }) {
  return (
    <>
      <div
        className={`flex flex-col justify-between ${
          isChatDetailsVisible ? "w-7/12" : "w-3/4"
        }`}
      >
        <CurrentUserInfoPanel showChatDetails={showChatDetails} />
        <CurrentUserMessagesPanel />
        <NewMessagePanel />
      </div>
    </>
  );
}

export default CenterPanel;
