import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function CurrentUserFullInfo({ showChatDetails }) {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center border-b pb-2">
          <img
            className="w-20 h-20 rounded-full mb-1"
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt=""
          />
          <p className="font-bold text-lg text-center">Pathik Bhattarai</p>
          <p className="text-sm text-gray-500 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="absolute top-8 right-8 hover:text-red-500 cursor-pointer"
            onClick={showChatDetails}
          />
        </div>
      </div>
    </>
  );
}

export default CurrentUserFullInfo;
