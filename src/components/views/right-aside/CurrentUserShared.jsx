import React from "react";
import CurrentUserSharedMedia from "../../ui/right-side-panel/CurrentUserSharedMedia";
import CurrentUserSharedFiles from "../../ui/right-side-panel/CurrentUserSharedFiles";

function CurrentUserShared() {
  return (
    <>
      <CurrentUserSharedMedia />
      <CurrentUserSharedFiles />
    </>
  );
}

export default CurrentUserShared;
