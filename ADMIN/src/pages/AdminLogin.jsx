import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { assets } from '../assets/assets';
import { useAdminContext } from '../context/AdminContext';
import toast from "react-hot-toast";

const AdminLogin = () => {

  const { loginAdmin } = useAdminContext();

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

      const navigate = useNavigate();

      const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Please fill in all fields");

    const success = await loginAdmin(email, password);
    if (success) {
      toast.success("Welcome, Admin! 🚀");
      navigate("/home");
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
              ADMIN LOGIN PORTAL
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
          <div className="animate-slideUp shadow-xl rounded-lg shadow-orange-800 w-full lg:w-1/2 relative">
            <img
              src={assets.admin_profile}
              alt="Excel Background"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-lg text-center p-6">
              <h2 className="text-3xl animate-slideUp delay-300 font-extrabold text-white mb-3">
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400">
                  Blogring
                </span>{" "}
                Platform
              </h2>
              <p className="text-white font-semibold">
                Welcome back! Sign in to manage all the user credentials, blog posts and their comments
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin
