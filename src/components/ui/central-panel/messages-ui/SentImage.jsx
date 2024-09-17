import React from "react";

function SentImage() {
  return (
    <>
      <div className="flex justify-end items-center mb-2 mr-2">
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
          </div>
          <p className="text-xs text-right text-gray-500">
            12:30 • <span>Sent</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SentImage;
