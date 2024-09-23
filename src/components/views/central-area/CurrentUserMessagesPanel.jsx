import React, { useState, useEffect, useRef } from "react";
import DateInfo from "../../ui/central-panel/messages-ui/DateInfo";
import ReceivedImage from "../../ui/central-panel/messages-ui/ReceivedImage";
import ReceivedText from "../../ui/central-panel/messages-ui/ReceivedText";
import SentImage from "../../ui/central-panel/messages-ui/SentImage";
import SentText from "../../ui/central-panel/messages-ui/SentText";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

function CurrentUserMessagesPanel() {
  const [allChat, setAllChat] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "chats", "HuYtyKSHSEhJIpp70FyD9nqJ6sY2"),
      (res) => {
        setAllChat(res.data());
      }
    );

    return () => {
      unSub();
    };
  }, []);

  return (
    <>
      <div className="h-max overflow-x-hidden overflow-y-scroll py-2">
        <DateInfo />
        <ReceivedImage />
        <ReceivedText />
        <SentImage />
        <SentText />
        <div ref={scrollRef}></div>
      </div>
    </>
  );
}

export default CurrentUserMessagesPanel;
