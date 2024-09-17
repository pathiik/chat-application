import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan } from "@fortawesome/free-solid-svg-icons";

function CurrentUserBlockStatus() {
  const [isBlocked, setIsBlocked] = useState(false);
  return (
    <>
      <div className="my-1">
        <div
          className={`rounded-md p-2 m-1 flex justify-center cursor-pointer items-center gap-2 ${
            isBlocked
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600"
          }`}
          onClick={() => setIsBlocked((prev) => !prev)}
        >
          {isBlocked ? (
            <FontAwesomeIcon icon={faCheck} className="text-white text-lg" />
          ) : (
            <FontAwesomeIcon icon={faBan} className="text-white text-lg" />
          )}
          {isBlocked ? (
            <p className="text-white">Unblock User</p>
          ) : (
            <p className="text-white">Block User</p>
          )}
        </div>
      </div>
    </>
  );
}

export default CurrentUserBlockStatus;
