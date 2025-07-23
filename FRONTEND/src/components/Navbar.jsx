import React from "react";
import { assets } from "../assets/assets";
import { BiSolidLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { RiFunctionFill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import { useRef } from "react";

const Navbar = () => {

  const {navigate, token, setInput, input} = useAppContext();

  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  return (
    <div className="flex justify-between items-center py-5 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 px-9">
      {/* Logo & Navigation */}
      <div className="flex flex-row gap-6 items-center">
        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          src={assets.blog_logo}
          alt="Blog Logo"
          className="w-28 active:scale-90 duration-300 active:shadow-slate-900 rounded-lg shadow-xl shadow-orange-800 cursor-pointer"
        />

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/about")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg shadow-xl shadow-slate-800 
                  bg-gradient-to-r from-blue-900 via-yellow-500 to-orange-600 hover:scale-105 
                  active:scale-95 transition-all duration-200 ease-in-out"
          >
            <p className="text-lg font-bold text-slate-900">About</p>
            <FaInfoCircle size={20} />
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg shadow-xl shadow-slate-800 
                  bg-gradient-to-r from-blue-900 via-yellow-500 to-orange-600 hover:scale-105 
                  active:scale-95 transition-all duration-200 ease-in-out"
          >
            <p className="text-lg font-bold text-slate-900">Contact</p>
            <IoCallSharp size={20} />
          </button>

          <button
            onClick={() => navigate("/feature")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg shadow-xl shadow-slate-800 
                  bg-gradient-to-r from-blue-900 via-yellow-500 to-orange-600 hover:scale-105 
                  active:scale-95 transition-all duration-200 ease-in-out"
          >
            <p className="text-lg font-bold text-slate-900">Features</p>
            <RiFunctionFill size={20}/>
          </button>
        </div>
      </div>

      {/* Search Form */}
        <form onSubmit={onSubmitHandler} className="flex shadow-xl shadow-slate-900 items-center justify-between w-2/5 bg-white rounded-lg overflow-hidden">
          <input
          ref={inputRef}
            className="w-full placeholder:text-slate-900 font-semibold px-4 py-2 outline-none"
            type="text"
            placeholder="Search for the blog"
            required
          />
          <button
            className="flex flex-row gap-3 items-center text-slate-900 bg-gradient-to-r from-blue-900 via-yellow-500 to-orange-600 px-6 py-2 rounded-lg active:scale-90 duration-200 ease-in-out"
            type="submit"
          >
            <FaSearch size={20}/>
            <p className="text-lg font-bold">Search</p>
          </button>
        </form>

      {/* Login Button */}
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-3 px-6 py-2 rounded-full shadow-xl shadow-slate-800 
              bg-gradient-to-r from-blue-900 via-yellow-500 to-orange-600 hover:scale-105 
              active:scale-95 transition-all duration-200 ease-in-out cursor-pointer"
      >
        <p className="text-lg font-bold text-slate-900">{token ? 'Dashboard' : 'LOGIN'}</p>
        <BiSolidLogInCircle size={30} />
      </button>
    </div>
  );
};

export default Navbar;
