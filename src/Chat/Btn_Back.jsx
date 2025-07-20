import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center font-bold text-4xl"
    >
      <span className="material-symbols-outlined mr-2">keyboard_backspace</span>
    </button>
  );
}

export default BackButton;
