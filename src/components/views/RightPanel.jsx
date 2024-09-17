import React from "react";
import CurrentUserFullInfoPanel from "./right-aside/CurrentUserFullInfoPanel";
import CurrentUserShared from "./right-aside/CurrentUserShared";
import CurrentUserBlockStatusPanel from "./right-aside/CurrentUserBlockStatusPanel";

function RightPanel({ showPanel, showChatDetails }) {
  return (
    <>
      <div className={`w-1/5 p-2 flex flex-col ${showPanel ? "" : "hidden"}`}>
        <CurrentUserFullInfoPanel showChatDetails={showChatDetails} />
        <CurrentUserShared />
        <CurrentUserBlockStatusPanel />
      </div>
    </>
  );
}

export default RightPanel;
