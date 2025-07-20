import React from "react";
import { Link } from "react-router-dom";
function HeaderHomePage() {
  return (
    <div className="flex justify-between items-center bg-gray-200 w-full p-5">
      <div>
        <Link to="/profile">
          <span className="material-symbols-outlined text-4xl">account_circle</span>
        </Link>
      </div>

      <div>
        <Link to="/imgFindLove">
          <span className="material-symbols-outlined text-5xl text-blue-500 ">favorite</span>
        </Link>
      </div>

      <div>
        <Link to="/chat">
          <span className="material-symbols-outlined text-4xl">mark_chat_unread</span>
        </Link>
      </div>
    </div>
  );
}

export default HeaderHomePage;
