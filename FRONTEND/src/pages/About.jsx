import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col justify-center w-screen min-h-screen overflow-auto items-center py-5 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900">
      <div className="flex flex-row justify-between w-full items-center px-8 py-5">
        <img
          src={assets.blog_logo}
          alt=""
          className="w-28 rounded-lg shadow-xl shad"
        />

        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700">
          ABOUT US
        </h1>

        <NavLink
          to={"/"}
          className="px-6 py-2 rounded-full shadow-xl shadow-orange-700 active:scale-90 duration-200 ease-in-out transition-all active:shadow-slate-900 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700"
        >
          <p className="text-lg font-bold text-slate-900">GO BACK</p>
        </NavLink>
      </div>

      <div className="relative animate-slideUp w-screen mt-5 max-w-screen-lg mx-auto mb-8">
        <img
          src={assets.about_us}
          alt=""
          className="w-full h-auto rounded-lg shadow-xl shadow-slate-950"
        />
        <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center bg-black/50 rounded-lg">
          <h1 className="text-white text-4xl font-extrabold">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-yellow-500 to-orange-600">
              Blogring
            </span>{" "}
            blogging Platform
          </h1>
          <p className="ml-5 text-slate-50 font-bold text-lg">
            Blogring is a dynamic platform desgined to empower writers and
            readers alike. Our mission is to create a space where diverse voices
            can share their stories, insights and perspectives with the world.
            We believe in the power of storytelling to connect people, inspiring
            change, and foster understanding.
          </p>
        </div>
      </div>

      <h1 className="text-center my-5 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700">
        OUR VISION
      </h1>

      <div className="shadow-xl mt-5 shadow-slate-950 rounded-lg px-6 bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600 py-5 mx-10">
        <p className="text-lg font-bold text-slate-900">
          We envision Blogring as the leading platform for the independent
          writers, a place where creativity thrives and meaningful conversation
          flourish. We strive to buid a commnuity that values authenticity,
          encourages collabrations, and hence celebrate the art of writing.
        </p>
      </div>

      <h1 className="text-4xl bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 mt-10 mx-auto">
        OUR VALUES
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-10">
        {[
          {
            title: "INTEGRITY",
            desc: "Upholding honesty and accountability in every action, integrity builds trust in teams, leaders, and organizations — turning words into meaningful commitment.",
            image: assets.integrity_photo,
          },
          {
            title: "INNOVATION",
            desc: "Innovation fuels advancement by encouraging bold ideas, experimentation, and creative problem-solving to shape the future and stay ahead in a fast-changing world.",
            image: assets.innovation_photo,
          },
          {
            title: "EMPOWERMENT",
            desc: "Empowerment means giving individuals the tools, confidence, and freedom to take initiative, make decisions, and contribute meaningfully to shared goals.",
            image: assets.empowerment_photo,
          },
          {
            title: "EXCELLENCE",
            desc: "Excellence is the pursuit of continuous improvement, where high standards, attention to detail, and discipline transform ordinary work into exceptional outcomes.",
            image: assets.excellence_photo,
          },
          {
            title: "COMMUNITY",
            desc: "Strong communities grow from empathy, support, and collaboration — creating spaces where people feel heard, valued, and connected.",
            image: assets.community_photo,
          },
          {
            title: "COLLABORATION",
            desc: "Collaboration means working together with openness, mutual respect, and shared purpose. It’s not just about splitting tasks, but about combining ideas, building trust, and amplifying each other’s strengths to achieve more than we could alone.",
            image: assets.collaboration_photo,
          },
        ].map(({ title, desc, image }) => (
          <div
            key={title}
            className="bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 rounded-2xl shadow-xl shadow-slate-900 transform hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center text-center"
          >
            <h1 className="text-3xl font-extrabold animate-bounce text-slate-900 mb-4">
              {title}
            </h1>
            <img
              src={image}
              alt={`${title} visual`}
              className="object-contain rounded-xl shadow-md mb-6"
            />
            <p className="text-xl font-bold text-slate-900">{desc}</p>
          </div>
        ))}
      </div>

      <h1 className="text-center my-5 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700">
        OUR STORY
      </h1>

      <div className="shadow-xl mt-5 shadow-slate-950 rounded-lg px-6 bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600 py-5 mx-10">
        <p className="text-lg font-bold text-slate-900">
          Blogring was founded in 2025 by a team of passionate writers and
          technologies who saw a need for a more user-friendly and
          community-focused blogging platform. Since then, we have grown into a
          vibrant community of writers and readers from around the globe. We are
          constantly evolving and improving our platform based on the user
          feedback, and we are excited about the future of Blogring.
        </p>
      </div>

      <div className="m-11 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-5xl animate-bounce rounded-xl font-bold p-5 shadow-xl shadow-orange-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-yellow-500 to-orange-700">
          Meet Our Team Members
        </h1>
        <p className="text-2xl font-bold">
          Here is our members of our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400">
            Blogring platform
          </span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 m-3 p-3">
        {/* Card 1 */}
        <div className="w-72 bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-yellow-500 to-orange-700 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center">
          <FaUserCircle size={50} />
          <p className="mt-3 text-xl font-extrabold px-2">
            Aditya Kumar Pradhan
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-72 bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-yellow-500 to-orange-700 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center">
          <FaUserCircle size={50} />
          <p className="mt-3 text-xl font-extrabold px-2">Aastha Kapoor</p>
        </div>

        {/* Card 3 */}
        <div className="w-72 bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-yellow-500 to-orange-700 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center">
          <FaUserCircle size={50} />
          <p className="mt-3 text-xl font-extrabold px-2">
            Tammineedi Pranavya
          </p>
        </div>

        <div className="w-72 bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-yellow-500 to-orange-700 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center">
          <FaUserCircle size={50} />
          <p className="mt-3 text-xl font-extrabold px-2">
            Rajat Soni
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
