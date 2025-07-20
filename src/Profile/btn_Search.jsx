import React from "react";

function Search() {
  return (
    <div>
      <div className="m-5">
        <div className="flex items-center bg-gray-300 rounded-full px-4 h-12 w-full">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent flex-grow outline-none text-black placeholder-gray-600"
          />
          <button className="text-gray-700 hover:text-black">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
