import React from "react";
import { Link } from "react-router-dom";

function First() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link to="/login">
        <img
          src="Img_logo.png"
          alt="Logo"
        />
      </Link>
    </div>
  );
}

export default First;
