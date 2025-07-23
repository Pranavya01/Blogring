import React, { useEffect, useState } from "react";
import { blog_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { FaClipboardList } from "react-icons/fa";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const {axios} = useAppContext();

  const fetchBlogs = async () => {
    try {
      const {data} = await axios.get('/api/admin/blogs')
      if(data.success) {
        setBlogs(data.blogs)
      } else {
        toast.error(data.blogs)
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col mt-10 mx-auto pt-5 px-5">
      <div className="shadow-xl bg-gradient-to-r from-blue-500 animate-slideDown via-yellow-500 to-orange-700 shadow-slate-900 w-2/6 rounded-lg mx-auto py-3 flex flex-row items-center justify-center gap-4 mb-6">
        <FaClipboardList size={30} className="mt-1" />
        <h1 className="text-xl font-bold">ALL BLOGS</h1>
      </div>

      <div className="relative animate-slideUp max-w-4xl shadow-xl shadow-slate-900 overflow-x-auto rounded-lg scrollbar-hide">
        <table className="w-full table-auto text-lg text-slate-900 bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 font-bold border-collapse">
          <thead className="uppercase bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 bg-slate-100 text-slate-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-center">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlog;
