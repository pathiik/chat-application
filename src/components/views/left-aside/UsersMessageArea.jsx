import React, { useState, useEffect } from "react";
import UserMessageTab from "../../ui/left-side-panel/UserMessageTab";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

function UserMessageArea({ isPopupVisible, isMenuVisible, chats }) {
  const [chatsData, setChatsData] = useState([]);

  console.log(chats);

  const { currentUser } = useUserStore();

  useEffect(() => {
    if (!currentUser?.id) return;
    const unsub = onSnapshot(
      doc(db, "userChats", currentUser.id),
      async (res) => {
        const items = res.data().chats;
        console.log(items);

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.id);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises);
        console.log(chatData);

        setChatsData(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );
    return () => {
      unsub();
    };
  }, [currentUser?.id]);

  return (
    <>
      <div
        className={`h-full overflow-y-auto overflow-x-hidden ${
          isPopupVisible ? "pointer-events-none overflow-hidden" : ""
        }
         ${isMenuVisible ? "pointer-events-none overflow-hidden" : ""}`}
      >
        {chats.map((chat) => (
          <UserMessageTab key={chat.chatId} user={chat.user} />
        ))}
      </div>
    </>
  );
}

export default UserMessageArea;
