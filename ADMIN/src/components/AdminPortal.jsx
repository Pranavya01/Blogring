import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const AdminPortal = () => {

    const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 px-4 py-10 overflow-y-auto">
      <div className="max-w-6xl w-full p-8 rounded-xl shadow-xl shadow-orange-800 bg-white/10 backdrop-blur-md text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400 mb-4">
          WELCOME TO ADMIN PORTAL
        </h1>
        <p className="text-gray-100 text-lg font-extrabold mb-8 max-w-2xl mx-auto">
          Effortlessly manage all user profiles, monitor and analyze blog
          content for quality and engagement, and oversee comment activity to
          ensure healthy and constructive interactions—all within an integrated
          administrative interface designed for efficient platform governance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Interactive Charts */}
          <div className="bg-gradient-to-r p-7 animate-slideUp hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
            <p className="mb-4 text-xl animate-pulse font-extrabold">
              Blog post oversight
            </p>
            <img
              src={assets.manage_blogs}
              alt="Interactive Charts"
              className="rounded-lg shadow-xl shadow-slate-800 object-contain"
            />
            <p className="text-sm mt-5 font-bold">
              Gain full visibility into every published post, from trending
              topics to archived drafts. Easily moderate content, update titles,
              or unpublish outdated entries—all through an intuitive interface
              built to streamline editorial workflows.
            </p>
            <button
              onClick={() => navigate("/postpage")}
              className="animate-bounce mt-3 font-bold shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
            >
              GET STARTED
            </button>
          </div>

          {/* 3D Visualization */}
          <div className="bg-gradient-to-r animate-slideUp p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
            <p className="mb-4 text-xl animate-pulse font-extrabold">
              Comment Moderation with Context
            </p>
            <img
              src={assets.manage_comments}
              alt="3D Visualization"
              className="rounded-lg shadow-xl shadow-slate-800 object-contain"
            />
            <p className="mt-2 text-sm font-bold">
              Stay on top of user engagement by monitoring all blog-related
              comments in one place. Approve, remove, or respond to feedback
              efficiently—whether it’s praise, critique, or spam. Built-in tools
              let you assess comment sentiment, flag abuse, and maintain
              discourse that reflects your platform’s values. Because meaningful
              interaction starts with meaningful moderation.
            </p>
            <button
              onClick={() => navigate("/commentpage")}
              className="animate-bounce mt-3 font-bold shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
            >
              GET STARTED
            </button>
          </div>

          {/* Excel Integration */}
          <div className="bg-gradient-to-r animate-slideUp p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
            <p className="mb-4 text-xl animate-pulse font-extrabold">
              User Profile Management
            </p>
            <img
              src={assets.manage_users}
              alt="Excel Integration"
              className="rounded-lg shadow-xl shadow-slate-800 object-contain"
            />
            <p className="mt-2 text-sm font-bold">
              Maintain a clean and secure user base by viewing, updating, or
              removing user profiles effortlessly. Review credentials, analyze
              activity, and enforce permissions—all while preserving a smooth
              and trusted experience for contributors and readers.
            </p>
            <button
              onClick={() => navigate("/userprofile")}
              className="animate-bounce font-bold mt-3 shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
