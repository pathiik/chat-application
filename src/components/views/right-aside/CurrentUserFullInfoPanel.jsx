import React from "react";
import CurrentUserFullInfo from "../../ui/right-side-panel/CurrentUserFullInfo";

function CurrentUserFullInfoPanel({ showChatDetails }) {
  return (
    <>
      <CurrentUserFullInfo showChatDetails={showChatDetails} />
    </>
  );
}

export default CurrentUserFullInfoPanel;
