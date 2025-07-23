import React, { useRef, useState } from "react";
import { blog_data, blogCategories } from "../assets/assets";
import BlogCard from "./BlogCard";
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const [menu, setMenu] = useState("All");

  const { blogs, input } = useAppContext();

  const filteredBlogs = () => {
    if (input === "") {
      return blogs;
    }
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase())
    );
  };

  return (
    <div className="bg-gradient-to-r py-1 from-gray-600 via-gray-700 to-gray-900">
      <div className="relative px-6 w-full mt-10">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 ml-4 top-1/2 -translate-y-1/2 z-10 bg-slate-800 text-white p-2 rounded-full shadow-md hover:bg-slate-700 transition"
        >
          ⬅️
        </button>

        {/* Scrollable Category Bar */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto whitespace-nowrap bg-gradient-to-l from-gray-200 via-gray-300 to-slate-400 gap-4 sm:gap-8 px-4 py-4 mx-12 rounded-md shadow-xl shadow-slate-900 scroll-smooth"
        >
          {blogCategories.map((item) => (
            <div key={item} className="relative flex-shrink-0">
              <button
                onClick={() => setMenu(item)}
                className={`relative flex items-center px-4 py-2 font-bold text-white transition-transform ${
                  menu === item && "scale-110 duration-300 ease-in-out"
                }`}
              >
                {menu === item && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 via-blue-300 to-cyan-400 z-0"></div>
                )}
                <p className="relative z-10 text-slate-900">{item}</p>
              </button>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute mr-4 right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800 text-white p-2 rounded-full shadow-md hover:bg-slate-700 transition"
        >
          ➡️
        </button>
      </div>

      <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3 xl-grid-cols4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {filteredBlogs()
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
