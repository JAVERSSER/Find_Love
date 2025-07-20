import React from "react";
import { Link } from "react-router-dom";
import BackButton from "./Btn_Back";
import Send from "./Send";
function Chat1() {
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-200 w-full p-5">
        <div>
          <BackButton />
        </div>

        <div>
          <Link to="">
            <div>
              <div className="flex items-center gap-5">
                <img
                  src="Img_Story2.jpeg"
                  className="w-12 h-12 object-cover rounded-full"
                  alt=""
                />
                <div>Heng Thirith</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex gap-2">
          <Link to="">
            <span className="material-symbols-outlined">videocam</span>
          </Link>
          <Link to="">
            <span className="material-symbols-outlined">menu</span>
          </Link>
        </div>
      </div>

      <div>
        <div className="userOne m-5">
          <p className="flex justify-center">7/08/2025,9:37PM</p>
          <h1 className="flex justify-end mt-3">Hi</h1>
        </div>

        <div className="userTwo m-5">
          <p className="flex justify-center">7/08/2025,9:40PM</p>
          <div className="flex items-center gap-3">
            <img
              src="Img_Story3.jpeg"
              className="w-12 h-12 object-cover rounded-full mt-3"
              alt=""
            />
            <h1 className="flex justify-start">Hello</h1>
          </div>
        </div>
      </div>
      <Send />
    </div>
  );
}

export default Chat1;
