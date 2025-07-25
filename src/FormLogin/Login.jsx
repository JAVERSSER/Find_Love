import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { auth } from "../FormLogin/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/imgFindLove");
    } catch (error) {
      const code = (error.code || "").toLowerCase();

      if (code.includes("user-not-found")) {
        setError("Account not found. Please register first.");
      } else if (code.includes("wrong-password")) {
        setError("Incorrect password. Please try again.");
      } else if (code.includes("invalid-email")) {
        setError("Invalid email format.");
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
        {/* Email */}
        <div className="m-5">
          <label className="text-2xl m-2 block" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-gray-300 w-full rounded-2xl h-12 pl-3"
          />
        </div>

        {/* Password */}
        <div className="m-5">
          <label className="text-2xl m-2 block" htmlFor="password">
            Password:
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
              className="bg-gray-300 w-full rounded-2xl h-12 pl-3 pr-12"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-sm text-blue-500"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-600 m-5 text-center font-semibold">{error}</div>
        )}

        {/* Submit Button */}
        <div className="m-5 flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-400 hover:bg-green-500"
            } w-32 rounded-full h-12 font-medium`}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>

      {/* Register Link */}
      <div className="text-center mb-4">
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
