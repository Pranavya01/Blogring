import React from "react";
import { assets } from "../../assets/assets";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { RiLogoutCircleFill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdFeaturedPlayList } from "react-icons/md";
import { useAppContext } from "../../context/AppContext";

const Layout = () => {

  const {axios, setToken, navigate} = useAppContext();

  const logout = () => {
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = null;
    setToken(null)
    navigate('/')
  }

  return (
    <>
      <div className="relative bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 flex flex-row w-screen overflow-auto px-7 py-5 justify-between items-center">
        <img
          src={assets.blog_logo}
          alt=""
          className="w-28 animate-fadeIn active:scale-90 duration-300 ease-in-out active:shadow-slate-900 cursor-pointer rounded-lg"
          onClick={() => navigate("/")}
        />

        <div className="flex flex-row justify-evenly gap-4 items-center mx-auto py-2 px-5">
          <button onClick={() => navigate("/about")} className="flex animate-rightslide shadow-xl shadow-orange-700 flex-row items-center rounded-lg justify-evenly gap-4 px-4 py-2 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 active:scale-90 duration-200 ease-in-out transition-all active:shadow-slate-800">
            <FaInfoCircle size={25} />
            <p className="text-slate-900 font-bold text-lg">ABOUT</p>
          </button>
          <button onClick={() => navigate("/contact")} className="flex animate-slideUp shadow-xl shadow-orange-700 flex-row items-center rounded-lg justify-evenly gap-4 px-4 py-2 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 active:scale-90 duration-200 active:shadow-slate-800">
            <IoCallSharp size={25} />
            <p className="text-slate-900 font-bold text-lg">CONTACT</p>
          </button>
          <button onClick={() => navigate("/feature")} className="flex animate-slideLeft shadow-xl shadow-orange-700 flex-row items-center rounded-lg justify-evenly gap-4 px-4 py-2 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 active:scale-90 duration-200 active:shadow-slate-800">
            <MdFeaturedPlayList size={25} />
            <p className="text-slate-900 font-bold text-lg">FEATURES</p>
          </button>
        </div>

        <button
          onClick={logout}
          className="px-6 py-2 flex animate-slideDown flex-row gap-3 items-center shadow-xl shadow-orange-700 active:scale-95 duration-300 active:shadow-slate-900 rounded-full bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700"
        >
          <RiLogoutCircleFill size={30} />
          <p className="text-lg font-bold text-slate-900">LOGOUT</p>
        </button>
      </div>

      <div className="flex min-h-screen h-[calc(100vh-70px)] bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
