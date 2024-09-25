import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import AddNewUserTab from "./AddNewUserTab";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
  query,
  where,
  serverTimestamp,
  addDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useUserStore } from "../../../lib/userStore";

function SearchNewUserPopup({ onPopupClose, setChats }) {
  const [user, setUser] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);
  const { currentUser } = useUserStore();

  const fetchUserChats = async (userId) => {
    try {
      const userChatsRef = doc(db, "userChats", userId);
      const userChatsSnapshot = await getDoc(userChatsRef);

      if (userChatsSnapshot.exists()) {
        const chats = userChatsSnapshot.data().chats || [];
        setChats(chats);
        console.log(chats);
      } else {
        console.log("User chats not found");
        setChats([]);
      }
    } catch (error) {
      console.error("Error fetching user chats:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchUserChats(currentUser.id);
    }
  }, [currentUser]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        const userId = querySnapshot.docs[0].id;
        setUser({ ...userData, id: userId });  
        setUserNotFound(false);
      } else {
        setUser(null);
        setUserNotFound(true);
      }
    } catch (error) {
      console.error("Error searching user:", error);
    }
  };

  const handleNewChat = async (e) => {
    e.preventDefault();

    try {
      const chatRef = await addDoc(collection(db, "chats"), {
        createdAt: serverTimestamp(),
        messages: [],
      });

      const newChat = {
        chatId: chatRef.id,
        lastMessage: "",
        receiverId: currentUser.id,
        updatedAt: Date.now(),
        userDetails: { 
          name: user.name,
          username: user.username,
          profilePictureUrl: user.profilePictureUrl
        }
      };

      await updateDoc(doc(db, "userChats", user.id), {
        chats: arrayUnion(newChat),
      });

      await updateDoc(doc(db, "userChats", currentUser.id), {
        chats: arrayUnion({
          ...newChat,
          receiverId: user.id,
        }),
      });

      setChats((prevChats) => [...prevChats, { ...newChat, user }]);

      onPopupClose();
    } catch (error) {
      console.error("Error creating new chat:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-lg w-max max-w-80 h-max">
      <form onSubmit={handleSearch} className="mb-2">
        <h2 className="text-xl text-center font-bold mb-2 relative">
          Start a New Chat
        </h2>
        <p
          className="absolute top-2 right-3 rounded-full cursor-pointer text-md flex justify-center items-center "
          title="Close"
          onClick={onPopupClose}
        >
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="hover:text-red-500"
          />
        </p>
        <SearchBar name="username" />
        <div className="flex justify-center gap-5 mt-4">
          <button className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded">
            Search User
          </button>
        </div>
      </form>
      {user ? (
        <div className="max-h-80 overflow-x-hidden">
          <AddNewUserTab
            profilePicture={user.profilePictureUrl} // Correct typo here
            name={user.name}
            username={user.username}
            handleNewChat={handleNewChat}
          />
        </div>
      ) : userNotFound ? (
        <div className="text-center text-red-500 font-semibold">
          No user found with the username.
        </div>
      ) : null}
    </div>
  );
}

export default SearchNewUserPopup;
