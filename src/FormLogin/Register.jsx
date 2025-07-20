import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="m-5">
        <h1 className="text-2xl m-2">User name :</h1>
        <input
          type="text"
          className="bg-gray-300 w-full rounded-2xl h-12 pl-[10px]"
        />
      </div>

      <div className="m-5">
        <h1 className="text-2xl m-2">Last name :</h1>
        <input
          type="text"
          className="bg-gray-300 w-full rounded-2xl h-12 pl-[10px]"
        />
      </div>

      <div className="m-5">
        <h1 className="text-2xl m-2">Gender :</h1>
        <input
          type="text"
          className="bg-gray-300 w-full rounded-2xl h-12 pl-[10px]"
        />
      </div>

      <div className="m-5">
        <h1 className="text-2xl m-2">Age :</h1>
        <input
          type="text"
          className="bg-gray-300 w-full rounded-2xl h-12 pl-[10px]"
        />
      </div>

      <div className="m-5 ">
        <h1 className="text-2xl m-2">Interest :</h1>
        <div className="m-5 flex justify-center space-x-10">
          <button className="bg-gray-300 w-24 rounded-full h-12 font-medium cursor-pointer">
            Men
          </button>

          <button className="bg-gray-300 w-24 rounded-full h-12 font-medium cursor-pointer">
            Women
          </button>
        </div>
      </div>

      <div className="m-5">
        <h1 className="text-2xl m-2">Password :</h1>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="bg-gray-300 w-full rounded-2xl h-12 pl-[10px] pr-12"
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-sm text-blue-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div className="m-5 flex justify-center">
        <Link to="/login">
          <button className="bg-gray-300 w-24 rounded-full h-12 font-medium cursor-pointer">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
