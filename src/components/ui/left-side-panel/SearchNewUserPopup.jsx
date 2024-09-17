import React from "react";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function SearchNewUserPopup({ onPopupClose }) {
  return (
    <div className="bg-white p-6 rounded shadow-lg w-max h-max">
      <h2 className="text-xl text-center font-bold mb-2 relative">
        Start a New Chat
      </h2>
      <p
        className="absolute top-2 right-3 rounded-full cursor-pointer text-md flex justify-center items-center "
        title="Close"
        onClick={onPopupClose}
      >
        <FontAwesomeIcon icon={faCircleXmark} className="hover:text-red-500" />
      </p>
      <SearchBar />
      <div className="flex justify-center gap-5 mt-4">
        <button className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded">
          Search User
        </button>
      </div>
    </div>
  );
}

export default SearchNewUserPopup;
