import React from "react";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import OptionsModal from "./OptionsModal";

function ChatAppInfo({ handleNewChat, isMenuVisible, setIsMenuVisible }) {
  return (
    <>
      <div className="p-2 flex flex-1 items-center justify-between">
        <div className="flex flex-1 justify-between w-full">
          <div className="flex flex-1 items-center gap-3">
            <img
              className="h-12 w-12 rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
              alt="Chat Map Application Logo"
            />
            <p className="text-2xl font-bold">ChatMap</p>
          </div>
          <div className="flex items-center gap-5 text-xl">
            <p
              className="cursor-pointer hover:text-green-500"
              title="New Chat"
              onClick={handleNewChat}
            >
              <FontAwesomeIcon icon={faMessage} />
            </p>
            <p
              className="cursor-pointer hover:text-green-500"
              onClick={() => setIsMenuVisible((prev) => !prev)}
              title="Menu"
            >
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </p>
            <div className="relative">
              <OptionsModal isMenuVisible={isMenuVisible} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatAppInfo;
