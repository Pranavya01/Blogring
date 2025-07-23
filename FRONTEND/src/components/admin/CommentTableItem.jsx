import React from "react";
import { assets } from "../../assets/assets";
import { MdDelete } from "react-icons/md";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);

  const { axios } = useAppContext();

  const approveComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/approve-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteComment = async () => {
    try {
      const confirm = window.confirm(
        "Are you sure that you want to delete this comment?"
      );

      if (!confirm) return;

      const { data } = await axios.post("/api/admin/delete-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="order-y bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700">
      <td className="px-5 py-4">
        <b className="font-bold text-lg text-slate-900">BLOG</b> :{" "}
        <p className="font-semibold inline-block text-slate-900 text-lg">
          {blog?.title || "BLOG DELETED"}
        </p>
        <br />
        <br />
        <b className="font-bold text-lg text-slate-900">NAME</b> :{" "}
        <p className="font-semibold inline-block text-slate-900 text-lg">
          {comment.name}
        </p>
        <br />
        <b className="font-bold text-lg text-slate-900">COMMENT</b> :{" "}
        <p className="font-semibold inline-block text-slate-900 text-lg">
          {comment.content}
        </p>
      </td>
      <td className="px-6 text-slate-900 font-bold text-md py-4">
        {BlogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <img
              onClick={approveComment}
              src={assets.tick_icon}
              className="w-5 hover:scale-110 transition-all cursor-pointer"
            />
          ) : (
            <p className="text-lg font-bold shadow-xl shadow-slate-900 rounded-lg bg-green-100 text-slate-900 cursor-pointer roudned-full px-3 py-1">
              Approved
            </p>
          )}
          <MdDelete
            onClick={deleteComment}
            size={30}
            className="hover:scale-110 transition-all cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
