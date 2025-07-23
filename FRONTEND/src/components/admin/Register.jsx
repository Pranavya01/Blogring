import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { userRegistration } = useAppContext();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    userRegistration(form.name, form.email, form.password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900">
      <form
        onSubmit={handleSubmit}
        className="animate-slideUp w-full m-10 max-w-5xl mx-auto px-7 py-10 shadow-2xl shadow-orange-800 rounded-lg bg-gradient-to-r from-gray-700 via-gray-500 to-gray-900"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-2xl shadow-xl shadow-slate-500 p-3">
                <h1 className="font-extrabold text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700">
                  USER REGISTRATION
                </h1>
              </div>
              <h2 className="text-md pt-4 text-center font-bold text-gray-800">
                Enter your credentials to create an account
              </h2>
            </div>
            <div>
              <h3 className="pt-4 pb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400 text-xl">
                USERNAME
              </h3>
              <div className="flex items-center flex-row-reverse gap-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="flex-1 p-3 animate-slideLeft placeholder-slate-900 rounded-xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 shadow-xl shadow-blue-600 outline-none"
                />
                <MdPerson size={30} className="animate-rightslide"/>
              </div>
            </div>
            <div>
              <h3 className="pt-4 pb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400 text-xl">
                EMAIL ID
              </h3>
              <div className="flex items-center flex-row-reverse gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="flex-1 p-3 animate-slideLeft placeholder-slate-900 rounded-xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 shadow-xl shadow-blue-600 outline-none"
                />
                <MdEmail size={30} className="animate-rightslide"/>
              </div>
            </div>
            <div>
              <h3 className="pt-4 pb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400 text-xl">
                PASSWORD
              </h3>
              <div className="flex items-center flex-row-reverse gap-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="flex-1 p-3 animate-slideLeft placeholder-slate-900 rounded-xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 shadow-xl shadow-blue-600 outline-none"
                />
                <RiLockPasswordFill size={30} className="animate-rightslide"/>
              </div>
            </div>

            <div className="flex justify-center items-center pt-2">
              <button className="animate-pulse mt-5 w-full shadow-xl shadow-slate-700 p-2 rounded-lg text-lg font-bold bg-gradient-to-r from-blue-400 via-yellow-500 to-orange-700 active:scale-95 duration-300 ease-in-out">
                REGISTER
              </button>
            </div>
            <div className="border-2 border-gray-900 rounded-xl mt-7"></div>
            <div className="flex justify-center items-center mt-3">
              <p className="text-slate-950 font-bold text-md">
                Already have an account!
              </p>
            </div>
            <div className="flex items-start justify-end mt-3">
              <p
                onClick={() => navigate("/admin")}
                className="font-semibold text-md text-slate-900 hover:cursor-pointer active:scale-95 duration-300 ease-in-out"
              >
                Login
              </p>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 animate-slideUp rounded-xl overflow-hidden shadow-2xl shadow-orange-800">
            {/* Layered Background Images */}
            <div className="relative w-full h-full">
              <img
                src={assets.register_user}
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

export default Register;
