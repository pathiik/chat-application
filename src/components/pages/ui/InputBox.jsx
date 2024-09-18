import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function InputBox({ iconName, inputType, placeholderText, value, onChange }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const updatedInputType =
    inputType === "password" && isPasswordVisible ? "text" : inputType;

  const handleShowPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <>
      <div className="w-72 flex justify-start items-center gap-2 p-2 rounded border border-black mb-2">
        <FontAwesomeIcon icon={iconName} className="w-5" />
        <input
          className="outline-none w-full bg-transparent"
          type={updatedInputType}
          placeholder={placeholderText}
          onChange={onChange}
          value={value}
          required
        />
        {inputType === "password" && (
          <FontAwesomeIcon
            icon={isPasswordVisible ? faEyeSlash : faEye}
            onClick={handleShowPassword}
            className="cursor-pointer w-5"
            title={isPasswordVisible ? "Hide Password" : "Show Password"}
          />
        )}
      </div>
    </>
  );
}

export default InputBox;
