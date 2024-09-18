import React from "react";

function Checkbox({ text, isChecked, onChange }) {
  return (
    <>
      <div className="flex justify-start items-center gap-2">
        <input
          id="check-box"
          type="checkbox"
          className="accent-green-500 cursor-pointer"
          checked={isChecked}
          onChange={onChange}
          required
        />
        <label htmlFor="check-box" className="text-sm text-gray-500">
          {text}
        </label>
      </div>
    </>
  );
}

export default Checkbox;
