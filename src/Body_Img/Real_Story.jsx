import React, { useState } from "react";
import Navbar from "../FormLogin/Navbar";
import { useNavigate } from "react-router-dom";

function Real_Story() {
  const navigate = useNavigate();

  // We'll manage 9 images (3 rows x 3 columns)
  // Initialize with default image or empty string
  const [images, setImages] = useState(Array(9).fill("IconProfile.png"));

  // Handle image upload per slot
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => {
          const newImages = [...prevImages];
          newImages[index] = reader.result; // base64 string
          return newImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Render images in 3 rows x 3 cols
  const renderImageGrid = () => {
    const rows = [];
    for (let row = 0; row < 3; row++) {
      const cols = [];
      for (let col = 0; col < 3; col++) {
        const idx = row * 3 + col;
        cols.push(
          <div key={idx} className="flex flex-col items-center">
            <img
              src={images[idx]}
              alt={`upload-${idx}`}
              className="rounded-2xl w-32 h-32 object-cover mb-2"
            />
            <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
              Upload
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, idx)}
              />
            </label>
          </div>
        );
      }
      rows.push(
        <div key={row} className="flex flex-row gap-5 m-5 justify-center">
          {cols}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div>{renderImageGrid()}</div>

      {/* Back and Next buttons */}
      <div className="flex justify-between items-center px-6 mt-10">
        <button
          className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded-full font-semibold"
          onClick={() => navigate(-1)} // go back
        >
          Back
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded-full font-semibold"
          onClick={() => navigate("/login")} // or your next route
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Real_Story;
