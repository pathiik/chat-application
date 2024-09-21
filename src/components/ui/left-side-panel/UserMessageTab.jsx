import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

function UserMessageTab() {
  const [isSeen, setIsSeen] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  useEffect(() => {
    if (!currentUser?.id) return;
    const unsub = onSnapshot(doc(db, "userChats", currentUser.id), async (res) => {
      const items = res.data().chats;

      const promises = items.map(async (item) => {
        const userDocRef = doc(db, "users", item.id);
        const userDocSnap = await getDoc(userDocRef);

        const user = userDocSnap.data();

        return {...item, user};
      })

      const chatData = await Promise.all(promises);

      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
    });
    return () => {
      unsub();
    };
  }, [currentUser?.id]);

  return (
    <>
      <div className="px-2 py-3 flex items-center justify-center border-b hover:bg-gray-100 hover:cursor-pointer">
        <div className="flex items-center gap-3 w-full">
          <img
            className="h-12 w-12 border-2 border-solid border-gray-800 rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt=""
          />
          <div className="w-full">
            <div className="flex justify-between items-center" title="Pathik">
              <p className="font-semibold">Pathik</p>
              {!isSeen ? (
                <p className="text-green-500 text-xs">12:00 p.m.</p>
              ) : (
                <p className="text-xs">12:00 p.m.</p>
              )}
            </div>
            <div className="flex justify-between items-center" title="Hey!">
              <p className="text-sm">{chats.lastMessage}</p>
              {!isSeen ? (
                <p className="text-green-500 text-xs">
                  <FontAwesomeIcon icon={faCircleDot} />
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserMessageTab;
