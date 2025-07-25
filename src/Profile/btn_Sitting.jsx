import { useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../Chat/Btn_Back";
import ToggleSwitch from "./ToggleSwitch";
import DeleteAccount from "./btn_DeleteAccount";
function Sitting() {
  const [value, setValue] = useState(5);
  const [valueAge, setAge] = useState(25);
  return (
    <div>
      <div className="flex font-bold gap-6 bg-gray-400 p-5 text-white ">
        <BackButton />
        <p className="text-1xl">Sitting</p>
      </div>

      <div>
        <div>
          <div className="">
            <div>
              <div>
                <p className="text-blue-400 text-1xl font-bold flex ml-6 m-2 md:m-2 md:ml-6">
                  Account Sittings
                </p>
                <input
                  type="text"
                  value={"069297337"}
                  className="bg-gray-300 w-full p-3 font-bold text-end pr-8 "
                />
              </div>
            </div>

            <div>
              <div>
                <p className="text-blue-400 text-1xl font-bold flex ml-6 m-2">
                  Location
                </p>
                <ToggleSwitch />
              </div>
            </div>

            <div>
              <div>
                <p className="text-blue-400 text-1xl font-bold flex ml-6 m-2">
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
          </div>
        </div>
      </div>

      <div>
        <div>
          <p className="text-blue-400 text-1xl font-bold flex ml-6 m-2">
            Globle
          </p>
          <ToggleSwitch />
        </div>
      </div>

      <div>
        <div>
          <p className="text-blue-400 text-1xl font-bold flex ml-6 m-4">
            Preferred Languages
          </p>
          <div className="flex mt-2">
            <input
              type="text"
              value={"English"}
              className="bg-gray-300 w-full p-3 px-7 font-bold text-start "
            />
            <button className="bg-gray-300 w-full p-3 font-bold text-end pr-8 ">
              Add
            </button>
          </div>
        </div>
      </div>

      <div>
        <p className="text-blue-400 text-1xl font-bold ml-6 mt-4 flex gap-40">
          Maximum Distance
          <p className="text-gray-700 font-semibold text-end ">{value} km</p>
        </p>
        <div className="">
          <div className="pt-2 px-6">
            <div className="">
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full flex items-center justify-center m-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="">
          <div className="pt-2 px-6">
            <p className="text-blue-400 text-1xl font-bold mt-4 flex gap-64">
              Age
              <p className="text-gray-700 font-semibold text-end ">
                18 - {valueAge}
              </p>
            </p>
            <input
              type="range"
              min="18"
              max="99"
              value={valueAge}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full flex items-center justify-center m-2"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="">
          <div>
            <p className="text-blue-400 text-1xl font-bold flex ml-6 m-4">
              Premium Discovery
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-5">
          <Link to="/login">
            <button className="bg-gray-300 w-full h-12 font-medium cursor-pointer">
              Log out
            </button>
          </Link>
        </div>
      </div>

      <div>
        <div className="mt-5">
              <DeleteAccount/>
        </div>
      </div>

    </div>
  );
}

export default Sitting;
