import React, { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets";
import CommentTableItem from "../../components/admin/CommentTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast"

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const {axios} = useAppContext();

  const fetchComments = async () => {
    try {
      const { data } = await axios.get('/api/admin/comments')
      data.success ? setComments(data.comments) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="flex flex-col mx-auto gap-4 px-5 py-4 rounded-md shadow-sm">
      {/* Header and Filter Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-xl animate-rightslide font-bold text-slate-50">COMMENTS</h1>

        <div className="flex animate-slideLeft gap-3">
          <button
            onClick={() => setFilter("Approved")}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-md transition duration-200 ${
              filter === "Approved"
                ? "bg-green-100 text-green-900 shadow-green-400"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <p className="text-lg font-bold">Approved</p>
          </button>

          <button
            onClick={() => setFilter("Not Approved")}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-md transition duration-200 ${
              filter === "Not Approved"
                ? "bg-red-100 text-red-900 shadow-red-400"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <p className="text-lg font-bold">Not Approved</p>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="relative animate-slideUp max-w-3xl overflow-x-auto bg-white shadow-xl shadow-slate-900 rounded-lg scrollbar-hide">
        <table className="w-full text-sm text-gray-700 table-auto">
          <thead className="text-md text-slate-50 text-left uppercase bg-gradient-to-r from-gray-500 via-gray-600 to-gray-800">
            <tr>
              <th className="px-6 text-lg font-bold py-3">Blog Title & Comment</th>
              <th className="px-6 text-lg font-bold py-3">Date</th>
              <th className="px-6 text-lg font-bold py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900">
            {comments
              .filter((comment) =>
                filter === "Approved"
                  ? comment.isApproved === true
                  : comment.isApproved === false
              )
              .map((comment, index) => (
                <CommentTableItem
                  key={comment._id}
                  comment={comment}
                  index={index + 1}
                  fetchComments={fetchComments}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
