import React, { useState, useEffect } from "react";
import LeftPanel from "./components/views/LeftPanel";
import CenterPanel from "./components/views/CenterPanel";
import RightPanel from "./components/views/RightPanel";
import LandingPage from "./components/pages/LandingPage";
import { auth } from "./lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

function App() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();
  
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserInfo(user?.uid);
      } else {
        fetchUserInfo(null);
      }
    });

    return () => {
      unsub();
    };
  }, [fetchUserInfo]);

  const [isChatDetailsVisible, setIsChatDetailsVisible] = useState(false);

  const showChatDetails = () => {
    setIsChatDetailsVisible((prev) => !prev);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {currentUser ? (
        <div className="p-2 flex gap-2 h-screen">
          <LeftPanel />
          {chatId && (
            <CenterPanel
              showChatDetails={showChatDetails}
              isChatDetailsVisible={isChatDetailsVisible}
            />
          )}
          {chatId && (
            <RightPanel
              showPanel={isChatDetailsVisible}
              showChatDetails={() => setIsChatDetailsVisible(false)}
            />
          )}
        </div>
      ) : (
        <LandingPage />
      )}
    </>
  );
}

export default App;
