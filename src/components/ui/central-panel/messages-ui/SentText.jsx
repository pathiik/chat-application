import React from "react";

function SentText() {
  return (
    <>
      <div className="flex flex-col items-end mr-2">
        <div className="flex flex-col justify-end items-end">
          <div className="bg-gray-300 p-2 rounded-lg max-w-md text-justify">
            <p className="text-sm">Hello, how are you?</p>
          </div>
          <p className="text-xs text-gray-500 ml-1">
            12:30 • <span>Sent</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SentText;
