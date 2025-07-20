import { useState } from "react";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

function Profile() {
  return (
    <div>
      <HeaderHomePage />
      <div>
        <div className="md:ml-52">
          <div>
            <div className="flex justify-center gap-4 m-2 md:flex md:justify-start md:ml-24">
              <div className="bg-slate-400 rounded-full p-2 m-0 ml-[-5rem]  ">
                <img
                  src="Img_Profile.JPG"
                  className="w-24 h-24 object-cover rounded-full"
                  alt=""
                />
                <div className="flex items-center justify-center text-white font-bold">
                  86%
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                Heng Thirith , 18
                <span className="material-symbols-outlined"> check_circle</span>
              </div>
            </div>
          </div>

          <div>
            <p className="ml-6">
              Hello my name is Heng Thirith I am 18 year old. Currently a third
              year Student at ITI.
            </p>
          </div>

          <div>
            <div>
              <p className="text-blue-400 text-1xl font-bold flex ml-6">
                My Favorite Sport
              </p>
            </div>

            <div className="flex ">
              <div className="m-2 ml-5">
                <Link to="#">
                  <button className="bg-gray-300 w-24 rounded-full h-12 font-medium cursor-pointer">
                    Football
                  </button>
                </Link>
              </div>

              <div className="m-2 ">
                <Link to="#">
                  <button className="bg-gray-300 w-24 rounded-full h-12 font-medium cursor-pointer">
                    Vollayball
                  </button>
                </Link>
              </div>

              <div>
                <div className="m-2 ">
                  <Link to="#">
                    <button className="bg-gray-300 w-24 rounded-full h-12 font-medium cursor-pointer">
                      Basketball
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-blue-400 text-1xl font-bold flex ml-6">
              My Favorite Song
            </p>
          </div>

          <div className="flex ">
            <div className="m-2 ml-5">
              <Link to="#">
                <button className="bg-gray-300 w-28 rounded-full h-12 font-medium cursor-pointer">
                  Vannda
                </button>
              </Link>
            </div>

            <div className="m-2">
              <Link to="#">
                <button className="bg-gray-300 w-28 rounded-full h-12 font-medium cursor-pointer">
                  G-Davith
                </button>
              </Link>
            </div>
          </div>

          <div className="flex">
            <div>
              <div className="m-2 ml-5">
                <Link to="#">
                  <button className="bg-gray-300 w-28 rounded-full h-12 font-medium cursor-pointer">
                    Tena
                  </button>
                </Link>
              </div>
            </div>

            <div>
              <div className="m-2 ">
                <Link to="#">
                  <button className="bg-gray-300 w-32 rounded-full h-12 font-medium cursor-pointer">
                    Suly Pheng
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p className="text-blue-400 text-1xl font-bold flex ml-6">
                Location
              </p>
              <ToggleSwitch />
            </div>
          </div>

          <div>
            <div>
              <p className="text-blue-400 text-1xl font-bold flex ml-6">
                Interest
              </p>
            </div>

            <div className="flex ">
              <div className="m-2 ml-5">
                <Link to="#">
                  <button className="bg-gray-300 w-28 rounded-full h-12 font-medium cursor-pointer">
                    Women
                  </button>
                </Link>
              </div>

              <div className="m-2">
                <Link to="#">
                  <button className="bg-gray-300 w-40 rounded-full h-12 font-medium cursor-pointer">
                    Good English
                  </button>
                </Link>
              </div>

            </div>
          </div>

          <div>
            <div>
              <p className="text-blue-400 text-1xl font-bold flex ml-6">
                Sitting
              </p>
            </div>

            <div className="flex ">
              <div className="m-2 ml-5">
                <Link to="/sitting">
                  <button className="bg-gray-300 w-28 rounded-full h-12 font-medium cursor-pointer">
                    Sitting
                  </button>
                </Link>
              </div>

              {/* <div className="m-2">
                <Link to="#">
                  <button className="bg-gray-300 w-40 rounded-full h-12 font-medium cursor-pointer">
                    Good English
                  </button>
                </Link>
              </div> */}

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Profile;
