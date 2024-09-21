import React from "react";
import { auth } from "../../../lib/firebase";

function OptionsModal({ isMenuVisible }) {
  return (
    <>
      {isMenuVisible && (
        <div className="bg-gray-100 shadow-2xl w-max rounded-md absolute right-7 top-5">
          <div className="px-4 py-3 text-center w-24 cursor-pointer hover:bg-green-200 rounded-t-md">
            <p>Profile</p>
          </div>
          <div
            className="px-4 py-3 text-center w-24 cursor-pointer hover:bg-green-200 rounded-b-md"
            onClick={() => auth.signOut()}
          >
            <p>Logout</p>
          </div>
        </div>
      )}
    </>
  );
}

export default OptionsModal;
