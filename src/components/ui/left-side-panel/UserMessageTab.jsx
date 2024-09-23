import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

function UserMessageTab({ user }) {
  const [isSeen, setIsSeen] = useState(false);

  return (
    <>
      <div
        className="px-2 py-3 flex items-center justify-center border-b hover:bg-gray-100 hover:cursor-pointer"
        key={user.chatId}
      >
        <div className="flex items-center gap-3 w-full">
          <img
            className="h-12 w-12 border-2 border-solid border-gray-800 rounded-full"
            src={
              user.profilePictureUrl ||
              "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            }
            alt=""
          />
          <div className="w-full">
            <div
              className="flex justify-between items-center"
              title={user.name}
            >
              <p className="font-semibold">{user.name}</p>
              {!isSeen ? (
                <p className="text-green-500 text-xs">12:00 p.m.</p>
              ) : (
                <p className="text-xs">12:00 p.m.</p>
              )}
            </div>
            <div
              className="flex justify-between items-center"
              title={user.lastMessage}
            >
              <p className="text-sm">
                {user.lastMessage || "No messages yet!"}
              </p>
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
