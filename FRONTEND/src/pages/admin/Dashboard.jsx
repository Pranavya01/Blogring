import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";
import { FaClipboardList } from "react-icons/fa";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const {axios} = useAppContext();

  const fetchDasboard = async () => {
    try {
      const {data} = await axios.post('/api/admin/dashboard')
      data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchDasboard();
  },[]);

  return (
    <div className="relative w-screen overflow-auto min-h-screen">
      <div className="flex flex-row justify-evenly items-center gap-3 mx-auto px-5 py-5">
        <div className="flex flex-col animate-rightslide rounded-lg bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 shadow-xl shadow-slate-900 gap-3 items-center justify-center px-3 py-7">
          <img
            src={assets.blog_post}
            className="w-60 rounded-lg shadow-xl shadow-slate-900"
            alt=""
          />
          <p className="text-lg pt-3 font-bold">BLOGS</p>
          <p className="text-xl font-bold">{dashboardData.blogs}</p>
        </div>
        <div className="flex flex-col animate-slideUp rounded-lg bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 shadow-xl shadow-slate-900 gap-3 items-center justify-center px-3 py-7">
          <img
            src={assets.comments_post}
            className="w-56 rounded-lg shadow-xl shadow-slate-900"
            alt=""
          />
          <p className="text-lg pt-3 font-bold">COMMENTS</p>
          <p className="text-xl font-bold">{dashboardData.comments}</p>
        </div>
        <div className="flex flex-col rounded-lg animate-slideLeft bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 shadow-xl shadow-slate-900 gap-3 items-center justify-center px-3 py-7">
          <img
            src={assets.drafts_post}
            className="w-56 h-40 rounded-lg shadow-xl shadow-slate-900"
            alt=""
          />
          <p className="text-lg pt-3 font-bold">DRAFTS</p>
          <p className="text-xl font-bold">{dashboardData.drafts}</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 mx-auto mt-8">
        <div className="flex flex-row gap-2 rounded-lg shadow-xl px-12 py-4 mb-5 bg-gradient-to-r from-blue-500 via-yellow-500 animate-slideDown to-orange-700 shadow-slate-900 items-center">
          <FaClipboardList size={30} />
          <p className="text-xl font-bold">LATEST BLOGS</p>
        </div>

        <div className="relative animate-slideUp mb-7 max-w-4xl shadow-xl shadow-slate-900 overflow-x-auto rounded-lg scrollbar-hide">
          <table className="w-full bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-700 table-auto text-left text-lg text-slate-900 font-bold border-collapse">
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
              {dashboardData.recentBlogs.map((blog, index) => {
                return <BlogTableItem key={blog._id} blog={blog}
                fetchBlogs={fetchDasboard} index={index + 1}/>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
