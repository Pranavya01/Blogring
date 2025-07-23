import React from "react";
import { assets, footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img src={assets.blog_logo} alt="" className="w-32 rounded-lg sm:w-44" />
          <p className="max-w-[410px] mt-16 font-bold text-slate-900">
            Welcome to your own blogging platfrom, where you can share your
            thoughts, voice, opinion and read, research on different topics on
            various categories
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
            {footer_data.map((section, index) => (
                <div key={index}>
                    <h3 className="font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-800 md:mb-5 mb-2">{section.title}</h3>
                    <ul className="text-sm text-slate-100 font-bold space-y-1">
                        {section.links.map((link, i) => (
                            <li key={i}>
                                <a href="#" className="hover:underline transition">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base font-bold text-gray-500/80">
        Copyright 2025 @ Blogring - All right reserved
      </p>
    </div>
  );
};

export default Footer;
