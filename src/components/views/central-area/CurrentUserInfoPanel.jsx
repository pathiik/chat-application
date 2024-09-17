import React from "react";
import CurrentUserInfoTab from "../../ui/central-panel/CurrentUserInfoTab";

function CurrentUserInfoPanel({ showChatDetails }) {
  return (
    <>
      <CurrentUserInfoTab showChatDetails={showChatDetails} />
    </>
  );
}

export default CurrentUserInfoPanel;
