import React from "react";

function ReceivedImage() {
  return (
    <>
      <div className="flex justify-start items-center ml-2 mb-1">
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
          </div>
          <p className="text-xs text-right text-gray-500">12:30</p>
        </div>
      </div>
    </>
  );
}

export default ReceivedImage;
