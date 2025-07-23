import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { useAdminContext } from "../context/AdminContext";

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const { fetchAllComments, deleteCommentById } = useAdminContext();

  const loadComments = async () => {
    const commentList = await fetchAllComments();
    setComments(commentList);
  };

  const handleDelete = async (commentId) => {
    const confirm = window.confirm("Are you sure you want to delete this comment?");
    if (!confirm) return;

    const success = await deleteCommentById(commentId);
    if (success) loadComments(); // Refresh comments list
  };

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <div className="min-h-screen w-screen px-8 py-10 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 overflow-x-auto">
      <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-400 mb-8">
        Comment Management Dashboard
      </h1>

      <table className="w-full text-left bg-white rounded-lg shadow-xl shadow-slate-900">
        <thead className="bg-gradient-to-r from-blue-500 via-yellow-400 to-orange-400 text-slate-900">
          <tr>
            <th className="px-6 py-4 text-lg">Blog Title</th>
            <th className="px-6 py-4 text-lg">User</th>
            <th className="px-6 py-4 text-lg">Content</th>
            <th className="px-6 py-4 text-lg">Posted On</th>
            <th className="px-6 py-4 text-lg text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr
              key={comment._id}
              className="border-b text-slate-800 hover:bg-slate-100 transition"
            >
              <td className="px-6 py-3 font-semibold">
                {comment.blog?.title || "Deleted Blog"}
              </td>
              <td className="px-6 py-3">{comment.name || "Anonymous"}</td>
              <td className="px-6 py-3">{comment.content}</td>
              <td className="px-6 py-3">
                {new Date(comment.createdAt).toLocaleDateString()}
              </td>
              <td className="px-6 py-3 text-center">
                <MdDelete
                  size={24}
                  className="text-red-600 cursor-pointer hover:scale-110 transition"
                  onClick={() => handleDelete(comment._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentPage;