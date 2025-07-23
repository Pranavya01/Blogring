import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Login = () => {
  const { axios, setToken } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });

      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = data.token;
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full animate-slideUp max-w-5xl mx-auto px-7 py-10 shadow-2xl shadow-orange-800 rounded-lg bg-gradient-to-r from-gray-700 via-gray-500 to-gray-900"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* LEFT: Login Form */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="text-3xl  animate-bounce delay-100 hover:shadow-blue-600 ease-in-out duration-200 cursor-pointer rounded-lg p-4 shadow-xl shadow-slate-900 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 mb-2">
              LOGIN PORTAL
            </h1>
            <p className="text-center text-lg text-slate-50 font-semibold mb-6">
              Enter your credentials to access the blogging platform.
            </p>

            {/* Email */}
            <label className="font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 mb-2">
              EMAIL ID
            </label>
            <div className="flex items-center gap-2 mb-4">
              <MdEmail size={30} className="animate-pulse" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="flex-1 animate-slideUp delay-75 p-3 rounded-xl hover:shadow-orange-700 duration-200 ease-in-out bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 shadow-xl shadow-blue-600 outline-none"
                type="email"
                name="email"
                required
              />
            </div>

            {/* Password */}
            <label className="font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 mb-2">
              PASSWORD
            </label>
            <div className="flex items-center gap-2 mb-4">
              <RiLockPasswordFill size={30} className="animate-pulse" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="flex-1 p-3 animate-slideUp delay-75 hover:shadow-orange-700 duration-200 ease-in-out rounded-xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 shadow-xl shadow-blue-600 outline-none"
                type="password"
                name="password"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 animate-pulse delay-500 w-full py-3 rounded-lg shadow-xl shadow-blue-600 text-white bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 hover:scale-105 hover:shadow-orange-700 ease-in-out active:scale-95 transition-transform duration-200"
            >
              <h1 className="text-lg text-slate-950 font-bold">LOGIN</h1>
            </button>

            {/* Separator */}
            <div className="my-6 border border-gray-400" />

            <p className="animate-bounce text-center font-extrabold text-gray-800 mb-2">
              Don't have an account?
            </p>

            <div className="flex justify-between text-sm font-semibold text-slate-800">
              <p
                onClick={() => navigate("/register")}
                className="cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 text-lg hover:underline"
              >
                Create an Account
              </p>
            </div>
          </div>

          {/* RIGHT: Visual Panel */}
          <div className="relative w-full lg:w-1/2 animate-slideUp rounded-xl overflow-hidden shadow-2xl shadow-orange-800">
            {/* Layered Background Images */}
            <div className="relative w-full h-full">
              <img
                src={assets.login_page}
                alt="Login Background"
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6 py-10 rounded-xl">
                {/* Logo */}
                <img
                  src={assets.blog_logo}
                  alt="Blog Logo"
                  className="w-24 h-24 mb-6 rounded-lg shadow-lg shadow-orange-300 hover:scale-105 transition"
                />
                {/* Heading */}
                <h2 className="text-3xl font-extrabold text-white animate-slideUp delay-300 mb-3">
                  Welcome to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400">
                    Blogring
                  </span>{" "}
                  Platform
                </h2>
                {/* Description */}
                <p className="text-white font-medium text-lg max-w-md">
                  Sign in to share your voice, explore new stories, and keep
                  your creativity flowing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
