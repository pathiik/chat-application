import React from "react";

function Button({ buttonText, handleClick, disabled }) {
  return (
    <>
      <div className="flex justify-center items-center">
        <button
          className={`px-4 py-2 font-bold text-white rounded ${
            disabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
          onClick={handleClick}
          disabled={disabled}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}

export default Button;
