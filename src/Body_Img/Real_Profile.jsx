import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../FormLogin/Navbar";

function Real_Profile() {
  const navigate = useNavigate();
  const [image, setImage] = useState("IconProfile.png"); // default image

  // Load image from localStorage on mount
  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  // Handle image upload and save to localStorage
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Navigate to profile page
  const handleNext = () => {
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center mt-10">
        <div className="bg-white p-6 flex flex-col items-center rounded-xl shadow-lg">
          <img
            src={image}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full"
          />
          <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md mt-4">
            Upload New Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Back and Next buttons */}
      <div className="flex justify-between items-center px-6 mt-10">
        <button
          className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded-full font-semibold"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded-full font-semibold"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Real_Profile;
