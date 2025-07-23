import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);

  const {axios} = useAppContext();

  const deleteBlog = async () => {
    const confirm = window.confirm('Are you sure that you want to delete this blog?')
    if(!confirm) return;
    try {
      const { data } = await axios.post('/api/blog/delete', {id: blog._id})
      if (data.success) {
        toast.success(data.message)
        await fetchBlogs()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const togglePublish = async () => {
    try {
      const { data } = await axios.post('/api/blog/toggle-publish', {id: blog._id})
      if (data.success) {
        toast.success(data.message)
        await fetchBlogs()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <tr className="border-y border-gray-500">
      <th className="px-4 py-4"> {index} </th>
      <td className="px-2 py-2"> {title} </td>
      <td className="px-2 py-4"> {BlogDate.toDateString()} </td>
      <td className="px-2 py-4">
        <p
          className={`${
            blog.isPublished ? "text-green-600 pl-2" : "text-orange-700"
          }`}
        >
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>
      <td className="px-4 items-center py-4 flex text-md gap-5">
        <button onClick={togglePublish} className="shadow-xl shadow-slate-900 px-3 py-1 mt-1 rounded-lg cursor-pointer">
          {blog.isPublished ? "Unpublish" : "Publish"}
        </button>
        <RiDeleteBack2Fill onClick={deleteBlog} size={25}/>
      </td>
    </tr>
  );
};

export default BlogTableItem;
