import React, { useRef } from "react";
import { assets, author_data } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import AuthorCard from "./AuthorCard";

const Header = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const scrollRef1 = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  const scrollLeft1 = () => {
    scrollRef1.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight1 = () => {
    scrollRef1.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center py-5 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900">
        <div className="relative animate-slideUp w-screen mt-5 max-w-screen-lg mx-auto">
          <img
            src={assets.blogging_platform_image}
            alt=""
            className="w-full h-auto rounded-lg shadow-xl shadow-slate-950"
          />
          <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center bg-black/50 rounded-lg">
            <h1 className="text-white text-4xl font-extrabold">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-yellow-500 to-orange-600">
                Blogring
              </span>{" "}
              blogging Platform
            </h1>
            <p className="ml-5 text-slate-50 font-bold text-lg">
              Discover the world with new stories, ideas, differnt languages,
              various adventurous experience and everyone differnt perspectives.
              WordWave is a platform for the writers and readers to connect and
              share their thoughts.
            </p>
            <button className="animate-bounce flex flex-row items-center gap-3 py-2 bg-gradient-to-r from-blue-900 via-yellow-500 to-orange-600 px-7 rounded-full shadow-xl shadow-cyan-800 active:scale-90 cursor-pointer duration-200 ease-in-out">
              <p className="text-lg font-bold">START WRITING</p>
            </button>
          </div>
        </div>
        <div className="h-0.5 mt-14 rounded-full w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>
        <div className="flex flex-col gap-5 p-5 mt-7 justify-center items-center">
          <h1 className="text-5xl font-extrabold animate-bounce bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-600 to-orange-600">
            EMPOWERING YOUR VOICE
          </h1>
          <p className="text-2xl font-bold text-slate-100">
            Blogring provides you the tools and support that you need to succed
            as blogger
          </p>
        </div>
        <div className=" flex flex-row justify-evenly gap-28 mt-16 px-4">
          {/* Writing Blog */}
          <div className="bg-gradient-to-r hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-900 via-yellow-500 to-orange-600 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
            <img
              src={assets.writing_blogs}
              alt="Writing Blog"
              className="rounded-lg shadow-xl shadow-slate-800 w-40 sm:w-56 md:w-64 h-auto object-contain"
            />
            <p className="mt-4 text-xl font-bold">WRITING BLOGS</p>
            <p className="mt-3 font-semibold px-2">
              Express your voice, thoughts, ideas, and one-of-a-kind experiences
              through storytelling that carries your personal touch and
              authenticity.
            </p>
            <button
              onClick={() => navigate("/write")}
              className="animate-bounce mt-3 shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
            >
              <p className="font-bold">GET STARTED</p>
            </button>
          </div>

          {/* Reading Blog */}
          <div className="flex flex-col p-6 shadow-xl shadow-slate-950 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer rounded-lg bg-gradient-to-r from-blue-900 via-yellow-500 to-orange-600 items-center text-center max-w-xs">
            <img
              src={assets.reading_blogs}
              alt="Reading Blog"
              className="w-40 shadow-xl shadow-slate-950 sm:w-56 md:w-64 h-auto rounded-lg object-contain"
            />
            <p className="mt-4 text-xl font-bold">READING BLOGS</p>
            <p className="mt-3 font-semibold px-2">
              Explore fresh ideas, knowledge, opinions, and new perspectives —
              discover stories that challenge your thinking, ignite your
              curiosity, and open doors to conversations that matter.
            </p>
            <button
              onClick={() => {
                window.scrollBy({ top: 750, left: 0, behavior: "smooth" });
              }}
              className="animate-bounce mt-3 shadow-xl shadow-slate-800 rounded-full p-3 active:scale-90 duration-200 transition-all"
            >
              <p className="font-bold">GET STARTED</p>
            </button>
          </div>

          {/* Commenting on Blog */}
          <div className="flex flex-col shadow-xl shadow-slate-950 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer justify-center rounded-lg bg-gradient-to-r from-blue-900 via-yellow-500 to-orange-600 items-center text-center max-w-xs">
            <img
              src={assets.comments_blogs}
              alt="Commenting"
              className="w-40 shadow-xl shadow-slate-900 sm:w-56 md:w-64 h-auto rounded-lg object-contain"
            />
            <p className="mt-4 text-lg font-bold">COMMENTING BLOGS</p>
            <p className="mt-3 font-semibold px-2">
              Join the conversation and connect with like-minded thinkers —
              share your thoughts, spark meaningful dialogue, and become a part
              of a community that values ideas, insight, and your unique
              perspective.
            </p>
            <button
              onClick={() => navigate("/comment")}
              className="animate-bounce mt-3 shadow-xl shadow-slate-800 rounded-full p-3 active:scale-90 duration-200 transition-all"
            >
              <p className="font-bold">GET STARTED</p>
            </button>
          </div>
        </div>
        <div className="h-0.5 mt-14 rounded-full w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>
        <div className="flex flex-col justify-center items-center gap-5 p-5 mt-7">
          <h1 className="text-5xl animate-bounce font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-600 to-orange-600">
            VERSATILE BLOGGING PLATFORM
          </h1>
          <p className="text-2xl text-slate-100 font-bold">
            Blogring caters and provides you a wide range of the blogging
            interests, different topic, different categories and niches
          </p>
        </div>

        <div className="relative w-full px-14">
          <button
            onClick={scrollLeft1}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
          >
            ◀
          </button>

          <button
            onClick={scrollRight1}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
          >
            ▶
          </button>

          <div ref={scrollRef1} className="overflow-x-auto px-4 scroll-smooth">
            <div className="flex flex-row gap-10 w-max py-8">
              <div className="bg-gradient-to-r py-10 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-900 via-yellow-500 to-orange-600 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
                <img
                  src={assets.secret_blog}
                  alt="Writing Blog"
                  className="rounded-lg shadow-xl shadow-slate-800 w-40 sm:w-56 md:w-64 h-auto object-contain"
                />
                <p className="mt-4 text-xl font-bold">PERSONAL BLOGS</p>
                <p className="mt-3 font-semibold px-2">
                  Share your personal reflections, heartfelt experiences, and
                  captivating stories—infused with your unique voice and
                  authenticity to create something truly memorable and
                  meaningful.
                </p>
                <button
                  onClick={() => navigate("/write")}
                  className="animate-bounce mt-3 shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
                >
                  <p className="font-bold">GET STARTED</p>
                </button>
              </div>

              <div className="bg-gradient-to-r py-10 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-900 via-yellow-500 to-orange-600 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
                <img
                  src={assets.food_blog}
                  alt="Writing Blog"
                  className="rounded-lg shadow-xl shadow-slate-800 w-40 sm:w-56 md:w-64 h-auto object-contain"
                />
                <p className="mt-4 text-xl font-bold">FOOD BLOGS</p>
                <p className="mt-3 font-semibold px-2">
                  A flavorful journey through handpicked recipes that bring
                  together diverse tastes, culinary traditions, and memorable
                  kitchen or travel adventures—serving up inspiration one
                  delicious dish at a time.
                </p>
                <button
                  onClick={() => navigate("/write")}
                  className="animate-bounce mt-3 shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
                >
                  <p className="font-bold">GET STARTED</p>
                </button>
              </div>

              <div className="bg-gradient-to-r py-10 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-900 via-yellow-500 to-orange-600 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
                <img
                  src={assets.travel_blog}
                  alt="Writing Blog"
                  className="rounded-lg shadow-xl shadow-slate-800 w-40 sm:w-56 md:w-64 h-auto object-contain"
                />
                <p className="mt-4 text-xl font-bold">TRAVEL BLOGS</p>
                <p className="mt-3 font-semibold px-2">
                  Your gateway to global exploration—documenting destinations,
                  immersing in cultures, and capturing unforgettable moments
                  that celebrate the spirit of adventure and the joy of
                  discovery.
                </p>
                <button
                  onClick={() => navigate("/write")}
                  className="animate-bounce mt-3 shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
                >
                  <p className="font-bold">GET STARTED</p>
                </button>
              </div>

              <div className="bg-gradient-to-r py-10 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-900 via-yellow-500 to-orange-600 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
                <img
                  src={assets.buisness_photo}
                  alt="Writing Blog"
                  className="rounded-lg shadow-xl shadow-slate-800 w-40 sm:w-56 md:w-64 h-auto object-contain"
                />
                <p className="mt-4 text-xl font-bold">BUISNESS BLOGS</p>
                <p className="mt-3 font-semibold px-2">
                  Business blogs provide insights into entrepreneurship,
                  marketing, leadership, and productivity. Whether you're a
                  startup founder or a small business owner, these blogs offer
                  strategies, case studies, and industry trends to help you grow
                  and manage your business effectively.
                </p>
                <button
                  onClick={() => navigate("/write")}
                  className="animate-bounce mt-3 shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
                >
                  <p className="font-bold">GET STARTED</p>
                </button>
              </div>

              <div className="bg-gradient-to-r py-10 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-900 via-yellow-500 to-orange-600 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
                <img
                  src={assets.parenting_photo}
                  alt="Writing Blog"
                  className="rounded-lg shadow-xl shadow-slate-800 w-40 sm:w-56 md:w-64 h-auto object-contain"
                />
                <p className="mt-4 text-xl font-bold">PARENTING PHOTOS</p>
                <p className="mt-3 font-semibold px-2">
                  Parenting blogs offer real-life stories, practical advice, and
                  emotional support for moms, dads, and caregivers. They often
                  cover topics like child development, discipline strategies,
                  family routines, and the ups and downs of raising kids.
                </p>
                <button
                  onClick={() => navigate("/write")}
                  className="animate-bounce mt-3 shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
                >
                  <p className="font-bold">GET STARTED</p>
                </button>
              </div>

              <div className="bg-gradient-to-r py-10 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-900 via-yellow-500 to-orange-600 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
                <img
                  src={assets.fitness_photo}
                  alt="Writing Blog"
                  className="rounded-lg shadow-xl shadow-slate-800 w-40 sm:w-56 md:w-64 h-auto object-contain"
                />
                <p className="mt-4 text-xl font-bold">FITNESS BLOGS</p>
                <p className="mt-3 font-semibold px-2">
                  Fitness blogs are go-to resources for workout routines,
                  nutrition tips, and motivational content. They’re often run by
                  certified trainers, wellness coaches, or fitness enthusiasts
                  who share personal journeys, expert advice, and tools to help
                  readers stay active and healthy.
                </p>
                <button
                  onClick={() => navigate("/write")}
                  className="animate-bounce mt-3 shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
                >
                  <p className="font-bold">GET STARTED</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAMOUS AUTHOR PANELS */}
        <div className="h-0.5 mt-14 rounded-full w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>
        <div className="flex flex-col justify-center items-center gap-5 p-5 mt-4">
          <h1 className="text-5xl animate-bounce font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-600 to-orange-600">
            MEET OUR FAMOUS AUTHORS
          </h1>
          <p className="text-2xl font-bold text-slate-100">
            These are our featured and most famous authors who contributed their
            experiences and knowledge in our blogging platform
          </p>
        </div>
        <div className="relative w-full px-14">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
          >
            ◀
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
          >
            ▶
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto px-4 scroll-smooth py-6"
          >
            <div className="flex flex-row gap-6 w-max">
              {author_data.map((author) => (
                <AuthorCard key={author._id} author={author} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
