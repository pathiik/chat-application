import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SearchBar({ name }) {
  return (
    <>
      <div className="m-2">
        <div className="px-3 py-2 flex items-center justify-between gap-3 bg-slate-200 rounded-md">
          <div>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input
            className="px-1 tracking-wider w-full bg-transparent focus:outline-none"
            type="text"
            placeholder="Search"
            name={name}
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
