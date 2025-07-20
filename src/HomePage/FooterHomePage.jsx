import React from "react";

function FooterHomePage() {
  return (
    <div className="flex justify-between items-center bg-gray-200 w-full px-10 py-5">
      <div>
        <button>
          <span className="material-symbols-outlined text-5xl text-white bg-red-600 rounded-full p-2">close</span>
        </button>
      </div>

      <div>
        <button>
          <span class="material-symbols-outlined text-4xl text-blue-400 mt-[-5px] ">star</span>
        </button>
      </div>

      <div>
        <button>
          <span className="material-symbols-outlined text-5xl text-white bg-red-600 rounded-full p-2">
            favorite
          </span>
        </button>
      </div>

    </div>
  );
}

export default FooterHomePage;
