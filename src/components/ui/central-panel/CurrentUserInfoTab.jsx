import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faPhone,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";

function CurrentUserInfoTab({ showChatDetails }) {
  return (
    <>
      <div className="p-2 flex items-center justify-between border-b">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
              alt=""
            />
            <p className="text-2xl font-bold">Pathik Bhattarai</p>
          </div>
          <div className="flex items-center gap-8 text-xl">
            <p
              className="cursor-pointer hover:text-green-500"
              title="Audio Call"
            >
              <FontAwesomeIcon icon={faPhone} />
            </p>
            <p
              className="cursor-pointer hover:text-green-500"
              title="Video Call"
            >
              <FontAwesomeIcon icon={faVideoCamera} />
            </p>
            <p
              className="cursor-pointer hover:text-green-500"
              title="Chat Details"
            >
              <FontAwesomeIcon icon={faInfoCircle} onClick={showChatDetails} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentUserInfoTab;
