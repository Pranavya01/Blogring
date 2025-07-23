import React from "react";
import { useNavigate } from "react-router-dom";

const AuthorCard = ({ author }) => {
  const { title, description, image, _id } = author;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/author/${_id}`)}
      className="flex flex-col shadow-xl shadow-slate-900 items-center justify-center gap-4 p-5 min-w-[300px] max-w-xs bg-gradient-to-r from-blue-900 via-yellow-500 to-orange-600 rounded-lg hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer"
    >
      {/* 🖼 Profile Image */}
      <div className="w-60 h-60 rounded-full overflow-hidden shadow-xl shadow-slate-900">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* 📝 Title and Description */}
      <h1 className="text-3xl font-extrabold text-slate-950 text-center">
        {title}
      </h1>
      <p className="text-lg text-slate-100 font-bold text-center px-2">
        {description.slice(0, 80)}...
      </p>
    </div>
  );
};

export default AuthorCard;