import React, { useState } from "react";
import LeftPanel from "./components/views/LeftPanel";
import CenterPanel from "./components/views/CenterPanel";
import RightPanel from "./components/views/RightPanel";
import LandingPage from "./components/pages/LandingPage";

function App() {
  const user = false;

  const [isChatDetailsVisible, setIsChatDetailsVisible] = useState(false);

  const showChatDetails = () => {
    setIsChatDetailsVisible((prev) => !prev);
  };

  return (
    <>
      {user ? (
        <div className="p-2 flex gap-2 h-screen">
          <LeftPanel />
          <CenterPanel
            showChatDetails={showChatDetails}
            isChatDetailsVisible={isChatDetailsVisible}
          />
          <RightPanel
            showPanel={isChatDetailsVisible}
            showChatDetails={() => setIsChatDetailsVisible(false)}
          />
        </div>
      ) : (
        <LandingPage />
      )}
    </>
  );
}

export default App;
