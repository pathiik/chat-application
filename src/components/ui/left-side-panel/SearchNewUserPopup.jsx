import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import AddNewUserTab from "./AddNewUserTab";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../lib/firebase";

function SearchNewUserPopup({ onPopupClose }) {
  const [user, setUser] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);
  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setUser(querySnapshot.docs[0].data());
        setUserNotFound(false);
      } else {
        setUser(null);
        setUserNotFound(true);
      }
    } catch (error) {
      console.error(error);
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
            profilePicure={user.profilePictureUrl}
            name={user.name}
            username={user.username}
          />
        </div>
      ) : userNotFound ? (
        <div className="text-center text-red-500 font-semibold">
          No user found with the username.
        </div>
      ) : (
        null
      )}
    </div>
  );
}

export default SearchNewUserPopup;
