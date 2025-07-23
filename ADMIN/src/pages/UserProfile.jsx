import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { useAdminContext } from "../context/AdminContext";

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const { fetchAllUsers, deleteUserById } = useAdminContext();

  const loadUsers = async () => {
    const userList = await fetchAllUsers();
    setUsers(userList);
  };

  const handleDelete = async (userId) => {
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (!confirm) return;

    const success = await deleteUserById(userId);
    if (success) loadUsers(); // Refresh list
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="min-h-screen w-screen px-8 py-10 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 overflow-x-auto">
      <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-400 mb-8">
        User Management Dashboard
      </h1>

      <table className="w-full text-left bg-white rounded-lg shadow-xl shadow-slate-900 overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-500 via-yellow-400 to-orange-400 text-slate-900">
          <tr>
            <th className="px-6 py-4 text-lg">Name</th>
            <th className="px-6 py-4 text-lg">Email</th>
            <th className="px-6 py-4 text-lg">Role</th>
            <th className="px-6 py-4 text-lg">Joined On</th>
            <th className="px-6 py-4 text-lg text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user._id}
              className="border-b text-slate-800 hover:bg-slate-100 transition"
            >
              <td className="px-6 py-3 font-semibold">{user.name}</td>
              <td className="px-6 py-3">{user.email}</td>
              <td className="px-6 py-3 capitalize">{user.role || "user"}</td>
              <td className="px-6 py-3">{new Date(user.createdAt).toLocaleDateString()}</td>
              <td className="px-6 py-3 text-center">
                <MdDelete
                  size={24}
                  className="text-red-600 cursor-pointer hover:scale-110 transition"
                  onClick={() => handleDelete(user._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserProfile;