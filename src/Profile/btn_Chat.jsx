import { useState } from "react";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";
import Search from "./btn_Search";

function Chat() {
  return (
    <div>
      <HeaderHomePage />
      <Search/>

      <div>
        <div>
          <p className="text-1xl font-bold ml-4">Story</p>
        </div>

        <div className="flex gap-5 mt-4 mx-4">
          <div className="w-32 h-40 object-cover">
            <img src="Img_Story1.jpeg" className="rounded-xl" alt="" />
          </div>

          <div className="w-32 h-40 object-cover">
            <img src="Img_Story1.jpeg" className="rounded-xl" alt="" />
          </div>

          <div className="w-32 h-40 object-cover">
            <img src="Img_Story1.jpeg" className="rounded-xl" alt="" />
          </div>
        </div>
      </div>

      <div>
        <div>
          <p className="text-1xl font-bold ml-4 flex md:mt-6">Messages</p>
        </div>
        <div className="">
          <div className="m-4 ">

            <Link to="/chat1">
              <div className="flex items-center gap-6 font-bold">
                <img
                  src="Img_Story2.jpeg"
                  className="w-24 h-24 object-cover rounded-full my-2"
                  alt=""
                />
                <h1>Heng Thirith</h1>
              </div>
            </Link>

            <div className="flex items-center gap-6 font-bold">
              <img
                src="Img_Story2.jpeg"
                className="w-24 h-24 object-cover rounded-full my-2"
                alt=""
              />
              <h1>Bai Cristine</h1>
            </div>

            <div className="flex items-center gap-6 font-bold">
              <img
                src="Img_Story2.jpeg"
                className="w-24 h-24 object-cover rounded-full my-2"
                alt=""
              />
              <h1>Nat Davanh</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
