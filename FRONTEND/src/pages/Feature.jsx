import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Feature = () => {
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
          src={assets.feature_page}
          alt=""
          className="w-full h-auto rounded-lg shadow-xl shadow-slate-950"
        />
        <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center bg-black/50 rounded-lg">
          <h1 className="text-white text-4xl font-extrabold">
            Unlock the power of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-yellow-500 to-orange-600">
              Blogring Pro
            </span>{" "}
          </h1>
          <p className="ml-5 text-slate-50 font-bold text-lg">
            Elevate your bloggin experience with the exclusive pro features and
            advanced tools which are designed for the serious content creators
          </p>
          <button className="px-6 py-2 animate-bounce rounded-full shadow-xl shadow-orange-700 active:scale-90 duration-200 ease-in-out transition-all active:shadow-slate-900 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700">
            <p className="text-lg font-bold text-slate-900">Upgrade now</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-3xl text-slate-50 p-4 rounded-lg shadow-xl font-extrabold shadow-slate-900">Key Features</h1>
        <p className="text-lg text-slate-50 font-bold">Explore the powerful tools and capabilities that Blogring Pro offers to help you create, connect and grow your audience</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-10">
        {[
          {
            title: "Advanced Writing Interface",
            description:
              "Craft compelling content with our advanced editor, featuring enhanced formatting options and real-time collaboration tools.",
            image: assets.improvised_writing,
          },
          {
            title: "Enhanced Community Engagement",
            description:
              "Foster a vibrant commnunity around your blog with advanced commenting featuresm including moderation tools and priority support.",
            image: assets.community_engage,
          },
          {
            title: "Expanded Global Reach",
            description:
              "Reach a global audience with multi-language support, optimized content delivery, and translation services",
            image: assets.global_reach,
          },
          {
            title: "In-depth Analytics and Insights",
            description:
              "Track your blog's performance with detailed analytics and insights, including audience demographics and engagement metrics.",
            image: assets.depth_analysis,
          },
          {
            title: "Premium Customizable Templates",
            description:
              "Choose from a variety of professionally designed, premium templates to create a unique and visually stunning blog",
            image: assets.customizable_template,
          },
          {
            title: "Optimized Content Discoverability",
            description:
              "Enhance your content's visibility with advanced SEO tools, including keyword analysis, content optimization suggestions, and priority indexing",
            image: assets.optimized_content,
          },
        ].map(({ title, description, image }) => (
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
            <p className="text-xl font-bold text-slate-900">{description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-3xl text-slate-50 p-4 rounded-lg shadow-xl font-extrabold shadow-slate-900">Advanced Tools</h1>
        <p className="text-lg text-slate-50 font-bold">Take your blogging to the next level with our advanced features, designed to enhance your content and reach</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-10">
        {
            [
                {
                    title: "Advanced Analytics Dashboard",
                    description: "Gain deeper insights into your blog's performance with our comprehensive analytics dashboard, offering detailed metrics, trends and custom reporting",
                },
                {
                    title: "SEO Optimization Tools",
                    description: "Improve your blog's search engine rankings with our advanced SEO tools, including keyword analysis, content optimization suggestions and competitor analysis",
                },
                {
                    title: "Integration Options",
                    description: "Seamlessly integrate Blogring Pro with other services and platforms, such as social media, email marketing tools, and CRM systems, to streamline your workflow",
                }
            ].map(({ title, description}) => (
          <div
            key={title}
            className="bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 rounded-2xl shadow-xl shadow-slate-900 transform hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center text-center"
          >
            <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
              {title}
            </h1>
            <p className="text-xl font-bold text-slate-900">{description}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Feature;
