import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { auth } from "../FormLogin/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      // Success – redirect
      navigate("/imgFindLove");
    } catch (error) {
      const code = (error.code || "").toLowerCase();

      if (code.includes("user-not-found")) {
        alert("Account not found. Please register first.");
      } else if (code.includes("wrong-password")) {
        alert("Incorrect password. Please try again.");
      } else if (code.includes("invalid-email")) {
        alert("Invalid email format.");
      } else if (code.includes("invalid-credential")) {
        // This is the one you want to hide
        alert("Login failed. Please try again.");
      } else {
        // Fallback (no alert shown at all)
        console.error("Unknown error:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="m-5">
          <h1 className="text-2xl m-2">Email :</h1>
          <input
            type="email"
            name="email"
            placeholder="email..."
            value={form.email}
            onChange={handleChange}
            required
            className="bg-gray-300 w-full rounded-2xl h-12 pl-[10px]"
          />
        </div>

        <div className="m-5">
          <h1 className="text-2xl m-2">Password :</h1>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password..."
              value={form.password}
              onChange={handleChange}
              required
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

        <div className="m-5 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-gray-400" : "bg-gray-300"
            } w-24 rounded-full h-12 font-medium cursor-pointer`}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>

      <div className="text-center">
        <p>
          Create your own account!{" "}
          <Link to="/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
