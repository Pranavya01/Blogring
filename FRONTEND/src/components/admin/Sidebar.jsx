import React from "react";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-12 pr-8 pt-10 ">
      <div className="pl-10 shadow-xl animate-rightslide shadow-slate-900 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-r-full">
        <NavLink
          end
          to="/admin"
          className={({ isActive }) =>
            [
              "flex items-center gap-3 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 py-3.5 px-5 rounded-full cursor-pointer",
              "transition-all duration-300 ease-in-out transform",
              isActive
                ? "bg-slate-300 scale-90 shadow-xl shadow-black"
                : "shadow-xl shadow-orange-700 hover:bg-slate-200 hover:scale-[0.98]",
            ].join(" ")
          }
        >
          <MdSpaceDashboard size={30} />
          <p className="text-lg font-bold">DASHBOARD</p>
        </NavLink>
      </div>

      <div className="pl-10 shadow-xl animate-rightslide shadow-slate-900  bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-r-full">
        <NavLink
          end={true}
          to="/admin/addBlog"
          className={({ isActive }) =>
            [
              "flex items-center gap-3 py-3.5 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 px-5 rounded-full cursor-pointer",
              "transition-all duration-300 ease-in-out transform",
              isActive
                ? "bg-slate-300 scale-90 shadow-xl shadow-black"
                : "shadow-xl shadow-orange-700 hover:bg-slate-200 hover:scale-[0.98]",
            ].join(" ")
          }
        >
          <IoAddCircle size={30} />
          <p className="text-lg font-bold">ADD BLOGS</p>
        </NavLink>
      </div>
      <div className="pl-10 shadow-xl animate-rightslide shadow-slate-900 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-r-full">
        <NavLink
          end={true}
          to="/admin/listBlog"
          className={({ isActive }) =>
            [
              "flex items-center gap-3 py-3.5 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 px-5 rounded-full cursor-pointer",
              "transition-all duration-300 ease-in-out transform",
              isActive
                ? "bg-slate-300 scale-90 shadow-xl shadow-black"
                : "shadow-xl shadow-orange-700 hover:bg-slate-200 hover:scale-[0.98]",
            ].join(" ")
          }
        >
          <FaThList size={30} />
          <p className="text-lg font-bold">BLOGS LIST</p>
        </NavLink>
      </div>
      <div className="pl-10 shadow-xl animate-rightslide shadow-slate-900 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-r-full">
        <NavLink
          end={true}
          to="/admin/comments"
          className={({ isActive }) =>
            [
              "flex items-center gap-3 py-3.5 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 px-5 rounded-full cursor-pointer",
              "transition-all duration-300 ease-in-out transform",
              isActive
                ? "bg-slate-300 scale-90 shadow-xl shadow-black"
                : "shadow-xl shadow-orange-700 hover:bg-slate-200 hover:scale-[0.98]",
            ].join(" ")
          }
        >
          <FaComment size={30} />
          <p className="text-lg font-bold">COMMENTS</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
