import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function AddNewUserTab({ profilePicure, name, username }) {
  const handleNewChat = (e) => {
    e.preventDefault();
    console.log("New Chat");
  };
  return (
    <>
      <div className="px-2 py-3 mt-2">
        <form
          className="flex flex-col gap-2 items-center justify-center"
          onSubmit={handleNewChat}
        >
          <div className="flex items-center gap-3 w-full">
            <img
              className="h-12 w-12 border-2 border-solid border-gray-800 rounded-full"
              src={
                profilePicure ||
                "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
              }
              alt=""
            />
            <div className="w-full flex justify-between">
              <div className="flex flex-col overflow-x-hidden" title="Pathik">
                <p className="font-semibold w-44">{name}</p>
                <p className="text-gray-600 w-44">@{username}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center" title="Add User">
            <button className="px-2 py-1 bg-green-500 hover:bg-green-600 flex justify-between gap-1 items-center rounded text-white">
              <FontAwesomeIcon icon={faPlus} />
              <p className="text-xs">Add User</p>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddNewUserTab;
