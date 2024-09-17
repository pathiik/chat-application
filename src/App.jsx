import React, { useState } from "react";
import LeftPanel from "./components/views/LeftPanel";
import CenterPanel from "./components/views/CenterPanel";
import RightPanel from "./components/views/RightPanel";

function App() {
  const [isChatDetailsVisible, setIsChatDetailsVisible] = useState(false);

  const showChatDetails = () => {
    setIsChatDetailsVisible((prev) => !prev);
  };

  return (
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
  );
}

export default App;
