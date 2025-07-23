import React, { useEffect, useState } from "react";
import { assets, author_data } from "../assets/assets";
import { NavLink, useParams } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Author = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  const fetchAuthorData = async () => {
    const data = author_data.find((item) => item._id === id);
    setData(data);
  };

  useEffect(() => {
    fetchAuthorData();
  }, []);

  return (
    <div className="min-h-screen w-screen overflow-auto bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900">
      <div className="flex flex-row justify-between mx-7 items-center my-4">
        <img
          src={assets.blog_logo}
          alt="Logo"
          className="w-28 cursor-pointer rounded-lg shadow-xl shadow-orange-700 active:scale-90 duration-200 ease-in-out transition-all active:shadow-slate-900"
        />

        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 text-6xl font-extrabold">
          AUTHOR PROFILE
        </h1>

        <NavLink
          to="/"
          className="rounded-full px-6 py-2 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 shadow-xl shadow-orange-700 active:scale-90 duration-200 ease-in-out transition-all active:shadow-slate-900"
        >
          <p className="text-lg font-bold text-slate-900">GO BACK</p>
        </NavLink>
      </div>

      {data ? (
        <div className="flex flex-col mx-auto gap-4 justify-center items-center mt-8 text-center">
          <div className="w-60 h-60 animate-slideDown scale-110 rounded-full overflow-hidden shadow-xl shadow-slate-900">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-4xl rounded-lg shadow-xl shadow-slate-900 py-3 px-6 animate-slideUp font-bold text-yellow-400 mt-4">
            {data.title}
          </h2>

          <p className=" animate-fadeIn text-xl rounded-lg shadow-xl shadow-slate-900 py-6 mx-5 text-slate-200 px-9">
            {data.description}
          </p>

          <h1 className="text-center text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 mt-10">
            SOCIAL LINKS
          </h1>

          <div className="flex flex-col gap-10 my-12">
            <div className="flex flex-row gap-3 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 rounded-lg shadow-xl shadow-slate-900 px-6 py-3 items-center justify-center active:scale-90 duration-200 ease-in-out transition-all cursor-pointer">
              <MdEmail size={30}/>
              <p className="font-bold text-lg">{data.email}</p>
            </div>
            <div className="flex flex-row gap-3 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 rounded-lg shadow-xl shadow-slate-900 px-6 py-3 items-center justify-center active:scale-90 duration-200 ease-in-out transition-all cursor-pointer">
              <FaLinkedin size={30}/>
              <p className="font-bold text-lg">{data.linkedIn}</p>
            </div>
            <div className="flex flex-row gap-3 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 rounded-lg shadow-xl shadow-slate-900 px-6 py-3 items-center justify-center active:scale-90 duration-200 ease-in-out transition-all cursor-pointer">
              <FaGlobe size={30}/>
              <p className="font-bold text-lg">{data.website}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-white font-bold text-2xl mt-12">
          Loading author info...
        </p>
      )}
    </div>
  );
};

export default Author;
