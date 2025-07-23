import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import Moment from "moment";
import Footer from "../components/Footer";
import axios from "axios";
import { AiFillLike } from "react-icons/ai";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Blog = () => {
  const { id } = useParams();

  const {axios} = useAppContext()

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const addComment = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/blog/add-comment', {blog: id, name, content});
      if (data.success) {
        toast.success(data.message)
        setName('')
        setContent('')
      }
      else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleLike = () => {
    if (liked) return;
    setLikes((prev) => prev + 1);
    setLiked(true);
  };


  const fetchBlogData = async () => {
    try {
      const {data} = await axios.get(`/api/blog/${id}`)
      data.success ? setData(data.blog) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.post('/api/blog/comments', {blogId: id})
      if (data.success) {
        setComments(data.comments)
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className="min-h-screen w-screen bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 text-white">
      <Navbar />

      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-5 text-center mt-10 px-4">
        <p className="text-base sm:text-lg text-slate-100 font-semibold">
          Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold py-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-800">
          {data.title}
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-800">
          {data.subTitle}
        </h2>
        <p className="animate-bounce text-base sm:text-lg shadow-xl shadow-orange-800 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 text-slate-900 font-bold px-6 py-2 rounded-full">
          {data.author}
        </p>
      </div>

      {/* Content Section */}
      <div className="mx-auto px-6 md:px-10 max-w-6xl my-12">
        <img
          src={data.image}
          alt="Blog visual"
          className="w-full rounded-3xl mb-6 shadow-lg shadow-slate-900"
        />
        <div
          className="rich-text shadow-xl shadow-slate-900 p-5 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 rounded-lg max-w-6xl text-md font-bold mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />

        <div className="mt-14 mb-10 max-w-3xl shadow-xl shadow-slate-900 rounded-lg p-5 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 mx-auto">
          <p className="text-slate-900 animate-bounce w-1/2 mx-auto m-4 text-center p-4 font-bold shadow-xl shadow-slate-900 rounded-lg text-2xl">
            Commnets ({comments.length})
          </p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative max-w-xl p-4 text-slate-50 font-bold"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={assets.user_icon}
                    alt=""
                    className="w-10 bg-white rounded-full"
                  />
                  <p className="font-extrabold text-xl text-slate-900">
                    {item.name}
                  </p>
                </div>
                <p className="text-md text-slate-900 max-w-md ml-8">
                  {item.content}
                </p>
                <div className="absolute right-2 bottom-3 flex text-slate-900 items-center gap-2 text-sm">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex shadow-xl shadow-slate-900 flex-col items-center justify-center gap-6 max-w-3xl mx-auto p-6 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-800 rounded-lg">
          <h1 className="text-center text-3xl font-bold text-slate-900">
            Add Your Comment
          </h1>
          <form onSubmit={addComment} className="w-full flex flex-col gap-4">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full p-3 text-slate-900 rounded-md border-none shadow-xl placeholder:text-slate-900 shadow-slate-900 focus:outline-none"
              placeholder="Enter your name"
            />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              rows={5}
              className="w-full p-3 text-slate-900 rounded-md border-none shadow-xl shadow-slate-900 placeholder:text-slate-900 focus:outline-none resize-none"
              placeholder="Enter your comment"
            />
            <button
              type="submit"
              className="self-end px-6 py-2 text-blue-700 font-semibold rounded-full shadow-xl shadow-slate-900 hover:bg-blue-100 transition"
            >
              <p className="text-lg font-bold text-slate-50">SUBMIT</p>
            </button>

          </form>
        </div>

      <div className=" rounded-xl shadow-xl p-6 mx-auto w-2/6 my-8 text-center">

      <button
        onClick={handleLike}
        disabled={liked}
        className={`flex items-center gap-2 shad justify-center mx-auto px-4 py-2 rounded-full font-semibold text-white transition-all
          ${liked ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-500 hover:scale-105"}
        `}
      >
        <AiFillLike size={20} /> Like ({likes})
      </button>

      {liked && (
        <p className="mt-3 text-sm text-green-600 font-medium">
          You liked this blog!
        </p>
      )}
    </div>


        <div className="my-24 max-w-3xl justify-center items-center mx-auto">
          <p className="font-bold mb-5 text-3xl my-4 text-center">Share this article on the Social Media</p>
          <div className="flex flex-row justify-evenly items-center">
            <img src={assets.facebook_icon} width={90} className="shadow-xl shadow-slate-900 hover:shadow-orange-700 hover:scale-105 cursor-pointer duration-200 ease-in-out rounded-full " alt="" />
            <img src={assets.twitter_icon} width={90} alt="" className="shadow-xl shadow-slate-900 hover:shadow-orange-700 hover:scale-105 cursor-pointer duration-200 ease-in-out rounded-full "/>
            <img src={assets.googleplus_icon} width={90} alt="" className="shadow-xl shadow-slate-900 hover:shadow-orange-700 hover:scale-105 cursor-pointer duration-200 ease-in-out rounded-full "/>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen text-white text-xl font-semibold">
      Loading...
    </div>
  );
};

export default Blog;
