import React, { useState } from "react";

function CurrentUserSharedMedia() {
  const [isRecentMedia, setIsRecentMedia] = useState(true);

  return (
    <>
      <div className="my-1">
        <p className="text-center mb-1">
          {isRecentMedia ? "Recent Media" : "All Media"}
        </p>
        <div
          className={`grid grid-cols-3 max-h-48 ${
            isRecentMedia
              ? "overflow-hidden"
              : "overflow-y-scroll overflow-x-hidden"
          }`}
        >
          <img
            className={`rounded-lg p-1 ${
              isRecentMedia ? "w-24 h-24" : "w-20 h-20"
            }`}
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt=""
          />
          <img
            className={`rounded-lg p-1 ${
              isRecentMedia ? "w-24 h-24" : "w-20 h-20"
            }`}
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt=""
          />
          <img
            className={`rounded-lg p-1 ${
              isRecentMedia ? "w-24 h-24" : "w-20 h-20"
            }`}
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt=""
          />
          <img
            className={`rounded-lg p-1 ${
              isRecentMedia ? "w-24 h-24" : "w-20 h-20"
            }`}
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt=""
          />
          <img
            className={`rounded-lg p-1 ${
              isRecentMedia ? "w-24 h-24" : "w-20 h-20"
            }`}
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt=""
          />
          <img
            className={`rounded-lg p-1 ${
              isRecentMedia ? "w-24 h-24" : "w-20 h-20"
            }`}
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt=""
          />
          <img
            className={`rounded-lg p-1 ${
              isRecentMedia ? "w-24 h-24" : "w-20 h-20"
            }`}
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt=""
          />
          <img
            className={`rounded-lg p-1 ${
              isRecentMedia ? "w-24 h-24" : "w-20 h-20"
            }`}
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt=""
          />
          <img
            className={`rounded-lg p-1 ${
              isRecentMedia ? "w-24 h-24" : "w-20 h-20"
            }`}
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt=""
          />
        </div>
        <p
          className="text-xs mt-1 text-right mr-1 cursor-pointer hover:text-green-500"
          onClick={() => setIsRecentMedia((prev) => !prev)}
        >
          {isRecentMedia ? "View All" : "View Recent"}
        </p>
      </div>
    </>
  );
}

export default CurrentUserSharedMedia;
