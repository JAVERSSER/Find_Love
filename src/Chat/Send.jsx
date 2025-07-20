import React from "react";

function Send() {
  return (
    <div>
      <div className="mt-80 md:mt-[20rem]">
        <div className="m-5">
          <div className="flex items-center bg-gray-300 rounded-full px-4 h-12 w-full">
            <input
              type="text"
              placeholder="Type a message..."
              className="bg-transparent flex-grow outline-none text-black placeholder-gray-600"
            />
            <button className="text-gray-700 hover:text-black">
              <span className="material-symbols-outlined">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Send;
