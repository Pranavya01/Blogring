import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { BiSolidLogInCircle } from "react-icons/bi";
import { useAdminContext } from "../context/AdminContext";
import toast from "react-hot-toast";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const { logoutAdmin } = useAdminContext();

  const handleLogout = () => {
    logoutAdmin();
    navigate("/");
    toast(data.success);
  };


  return (
    <div className="flex flex-wrap justify-between items-center py-6 px-8 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 shadow-md">
      {/* Logo */}
      <div
        className="cursor-pointer w-28 shadow-xl shadow-orange-800 rounded-lg hover:scale-105 active:scale-95 transition"
        onClick={() => navigate("/")}
      >
        <img
          src={assets.blog_logo}
          alt="Blog Logo"
          className="w-full rounded-lg"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-6 items-center justify-center mt-4 lg:mt-0">

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-blue-900 via-yellow-500 to-orange-600 text-slate-900 font-bold shadow-xl shadow-slate-800 hover:scale-105 active:scale-95 transition"
        >
          LOGOUT <BiSolidLogInCircle size={30} />
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
