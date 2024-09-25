import React, { useState, useEffect } from "react";
import UserMessageTab from "../../ui/left-side-panel/UserMessageTab";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useChatStore } from "../../../lib/chatStore";

function UserMessageArea({ isPopupVisible, isMenuVisible, chats }) {
  const [chatsData, setChatsData] = useState([]); // Store fetched chats here
  const { currentUser } = useUserStore();
  const { changeChat } = useChatStore();

  // Fetch user chats immediately on load
  const fetchUserChats = async (userId) => {
    try {
      const userChatsRef = doc(db, "userChats", userId);
      const userChatsSnapshot = await getDoc(userChatsRef);

      if (userChatsSnapshot.exists()) {
        const chats = userChatsSnapshot.data().chats || [];
        setChatsData(chats); // Set the chats data immediately on fetch
        console.log("Yellow", chats);
      } else {
        setChatsData([]); // If no chats found
      }
    } catch (error) {
      console.error("Error fetching user chats:", error);
    }
  };
  console.log("Red", chatsData);

  useEffect(() => {
    if (currentUser?.id) {
      fetchUserChats(currentUser.id);
    }
  }, [currentUser]);

  // Sync with real-time updates for chats
  useEffect(() => {
    if (!currentUser?.id) return;
    const unsub = onSnapshot(
      doc(db, "userChats", currentUser.id),
      async (res) => {
        const items = res.data()?.chats || [];

        const promises = items.map(async (item) => {
          if (!item.id) return null;

          const userDocRef = doc(db, "users", item.id);
          const userDocSnap = await getDoc(userDocRef);

          if (!userDocSnap.exists()) {
            console.error(`User document for ID ${item.id} does not exist`);
            return null;
          }

          const user = userDocSnap.data();
          return { ...item, user };
        });

        const chatData = await Promise.all(promises);
        setChatsData(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => unsub(); // Cleanup on unmount
  }, [currentUser?.id]);

  const openChat = async (chat) => {
    if (!chat || !chat.user) {
      console.error("Empty");
      return;
    }
    changeChat(chat.chatId, chat.user);
    console.log("Chat opened", chat);

  };

  return (
    <div
      className={`h-full overflow-y-auto overflow-x-hidden ${
        isPopupVisible ? "pointer-events-none overflow-hidden" : ""
      } ${isMenuVisible ? "pointer-events-none overflow-hidden" : ""}`}
    >
      {chats.map((chat) => (
        <UserMessageTab
          key={chat.chatId}
          user={chat}
          openChat={() => openChat(chat)}
        />
      ))}
    </div>
  );
}

export default UserMessageArea;
