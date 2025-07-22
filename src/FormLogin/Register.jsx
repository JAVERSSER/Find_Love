import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import { db, auth } from "../FormLogin/firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [form, setForm] = useState({
    username: "",
    lastname: "",
    gender: "",
    age: "",
    interest: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // <-- loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGender = (gender) => {
    setForm({ ...form, gender });
  };

  const handleInterest = (interest) => {
    setForm({ ...form, interest });
  };

  const handleSubmit = async () => {
    if (
      !form.username.trim() ||
      !form.lastname.trim() ||
      !form.gender.trim() ||
      !form.age.trim() ||
      !form.interest.trim() ||
      !form.email.trim() ||
      !form.password.trim()
    ) {
      alert("Please fill in all fields before registering.");
      return;
    }

    if (isNaN(form.age) || Number(form.age) <= 0) {
      alert("Please enter a valid age.");
      return;
    }

    try {
      setLoading(true); // start loading

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        username: form.username,
        lastname: form.lastname,
        gender: form.gender,
        age: form.age,
        interest: form.interest,
        email: form.email,
      });

      navigate("/login"); // redirect to login without alert
    } catch (error) {
      console.error("Error:", error.message);
      alert("Registration failed: " + error.message);
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div>
      <Navbar />

      {/* Username */}
      <div className="m-5">
        <h1 className="text-2xl m-2">User name :</h1>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className="bg-gray-300 w-full rounded-2xl h-12 pl-[10px]"
          placeholder="Enter your username"
        />
      </div>

      {/* Lastname */}
      <div className="m-5">
        <h1 className="text-2xl m-2">Last name :</h1>
        <input
          type="text"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
          className="bg-gray-300 w-full rounded-2xl h-12 pl-[10px]"
          placeholder="Enter your last name"
        />
      </div>

      {/* Gender */}
      <div className="m-5">
        <h1 className="text-2xl m-2">Gender :</h1>
        <div className="m-5 flex justify-center space-x-10">
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
        <h1 className="text-2xl m-2">Age :</h1>
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={handleChange}
          className="bg-gray-300 w-full rounded-2xl h-12 pl-[10px]"
          placeholder="Enter your age"
        />
      </div>

      {/* Email */}
      <div className="m-5">
        <h1 className="text-2xl m-2">Email :</h1>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="bg-gray-300 w-full rounded-2xl h-12 pl-[10px]"
          placeholder="Enter your email"
        />
      </div>

      {/* Interest */}
      <div className="m-5">
        <h1 className="text-2xl m-2">Interest :</h1>
        <div className="m-5 flex justify-center space-x-10">
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

      {/* Password */}
      <div className="m-5">
        <h1 className="text-2xl m-2">Password :</h1>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            className="bg-gray-300 w-full rounded-2xl h-12 pl-[10px] pr-12"
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
          onClick={handleSubmit}
          disabled={loading}
          className={`${
            loading ? "bg-gray-400" : "bg-green-400 hover:bg-green-500"
          } w-32 rounded-full h-12 font-medium`}
        >
          {loading ? "Loading..." : "Register"}
        </button>
      </div>

      <div className="text-center mb-4">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
