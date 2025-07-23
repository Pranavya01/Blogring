import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 rounded-lg overflow-hidden shadow-xl shadow-slate-900 hover:scale-105 hover:shadow-slate-950 duration-200 cursor-pointer"
    >
      <img src={image} alt="" className="aspect-video" />
      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700  rounded-full text-slate-950 font-bold text-md">
        {category}
      </span>
      <div className="p-5">
        <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
        <p className="mb-3 text-xs text-gray-800" dangerouslySetInnerHTML={{"__html" : description.slice(0,80)}}></p>
      </div>
    </div>
  );
};

export default BlogCard;
