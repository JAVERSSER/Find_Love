import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";

import { auth, db } from "../FormLogin/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Register() { 
  const [form, setForm] = useState({
    username: "",
    lastname: "",
    gender: "",
    age: "",
    interest: "",
    email: "",
    password: "",
    imageUrl: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGender = (gender) => {
    setForm((prev) => ({ ...prev, gender }));
  };

  const handleInterest = (interest) => {
    setForm((prev) => ({ ...prev, interest }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !form.username ||
      !form.lastname ||
      !form.gender ||
      !form.age ||
      !form.interest ||
      !form.email ||
      !form.password
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (isNaN(form.age) || form.age <= 0) {
      alert("Please enter a valid age.");
      return;
    }

    setLoading(true);

    try {
      // Register with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;

      // Save user data to Firestore with document ID = user UID
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        username: form.username,
        lastname: form.lastname,
        gender: form.gender,
        age: Number(form.age),
        interest: form.interest,
        email: form.email,
        imageUrl: form.imageUrl || "",
        password: form.password,
        createdAt: new Date(),
      });

      // Optionally store some info locally
      localStorage.setItem("firstname", form.username);
      localStorage.setItem("lastname", form.lastname);
      localStorage.setItem("age", form.age);
      localStorage.setItem("profileImage", form.imageUrl || "");

      // Redirect to login page
      navigate("/login");
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Registration failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
        {/* Username */}
        <div className="m-5">
          <label className="text-2xl m-2 block">User name :</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="bg-gray-300 w-full rounded-2xl h-12 pl-3"
            placeholder="Enter your username"
          />
        </div>

        {/* Lastname */}
        <div className="m-5">
          <label className="text-2xl m-2 block">Last name :</label>
          <input
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            className="bg-gray-300 w-full rounded-2xl h-12 pl-3"
            placeholder="Enter your last name"
          />
        </div>

        {/* Gender */}
        <div className="m-5">
          <label className="text-2xl m-2 block">Gender :</label>
          <div className="flex justify-center space-x-10">
            <button
              type="button"
              className={`${
                form.gender === "Male" ? "bg-blue-400" : "bg-gray-300"
              } w-24 rounded-full h-12 font-medium`}
              onClick={() => handleGender("Male")}
            >
              Male
            </button>
            <button
              type="button"
              className={`${
                form.gender === "Female" ? "bg-pink-400" : "bg-gray-300"
              } w-24 rounded-full h-12 font-medium`}
              onClick={() => handleGender("Female")}
            >
              Female
            </button>
          </div>
        </div>

        {/* Age */}
        <div className="m-5">
          <label className="text-2xl m-2 block">Age :</label>
          <input
            type="number"
            min="1"
            name="age"
            value={form.age}
            onChange={handleChange}
            className="bg-gray-300 w-full rounded-2xl h-12 pl-3"
            placeholder="Enter your age"
          />
        </div>

        {/* Interest */}
        <div className="m-5">
          <label className="text-2xl m-2 block">Interest :</label>
          <div className="flex justify-center space-x-10">
            <button
              type="button"
              className={`${
                form.interest === "Men" ? "bg-blue-400" : "bg-gray-300"
              } w-24 rounded-full h-12 font-medium`}
              onClick={() => handleInterest("Men")}
            >
              Men
            </button>
            <button
              type="button"
              className={`${
                form.interest === "Women" ? "bg-pink-400" : "bg-gray-300"
              } w-24 rounded-full h-12 font-medium`}
              onClick={() => handleInterest("Women")}
            >
              Women
            </button>
          </div>
        </div>

        {/* Image URL Input */}
        <div className="m-5">
          <label className="text-2xl m-2 block">Profile Image URL :</label>
          <input
            type="url"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            className="bg-gray-300 w-full rounded-2xl h-12 pl-3"
            placeholder="Enter image URL"
          />
        </div>

        {/* Email */}
        <div className="m-5">
          <label className="text-2xl m-2 block">Email :</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="bg-gray-300 w-full rounded-2xl h-12 pl-3"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="m-5">
          <label className="text-2xl m-2 block">Password :</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="bg-gray-300 w-full rounded-2xl h-12 pl-3 pr-12"
              placeholder="Enter your password"
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

        {/* Submit */}
        <div className="m-5 flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-400 hover:bg-green-500"
            } w-32 rounded-full h-12 font-medium`}
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </div>
      </form>

      <div className="text-center mb-4">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
