import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Login() {
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

      <div className="m-5 flex justify-end ">
        <Link to="/imgFindLove">
          <button className="bg-gray-300 w-24 rounded-full h-12 font-medium cursor-pointer">
            Login
          </button>
        </Link>
      </div>

      <div className="m-5 flex justify-start ">
        <Link to="/google">
          <button className="bg-gray-300 w-24 rounded-full h-12 font-medium cursor-pointer">
            Google
          </button>
        </Link>
      </div>

      <div className="m-5 flex justify-start ">
        <Link to="/facebook">
          <button className="bg-gray-300 w-24 rounded-full h-12 font-medium cursor-pointer">
            Facebook
          </button>
        </Link>
      </div>

      <div className="m-5 flex justify-start ">
        <Link to="/icloud">
          <button className="bg-gray-300 w-24 rounded-full h-12 font-medium cursor-pointer">
            iCloud
          </button>
        </Link>
      </div>

      <div className="m-5 flex justify-center">
        <Link to="/register">
          <button className="bg-gray-300 w-24 rounded-full h-12 font-medium cursor-pointer">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
