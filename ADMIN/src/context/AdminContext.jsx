import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminContext = createContext();
export const useAdminContext = () => useContext(AdminContext);

const BASE_URL = import.meta.env.VITE_BASE_URL;

const adminAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const AdminProvider = ({ children }) => {
  const [adminToken, setAdminToken] = useState(localStorage.getItem("adminToken") || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (adminToken) {
      adminAxios.defaults.headers.common["Authorization"] = `Bearer ${adminToken}`;
    } else {
      delete adminAxios.defaults.headers.common["Authorization"];
    }
  }, [adminToken]);

  const loginAdmin = async (email, password) => {
    try {
      const { data } = await adminAxios.post("/api/admins/login", { email, password });
      if (data.success) {
        localStorage.setItem("adminToken", data.token);
        setAdminToken(data.token);
        toast.success("Logged in successfully");
        return true;
      } else {
        toast.error(data.message);
        return false;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      return false;
    }
  };

  const logoutAdmin = () => {
    localStorage.removeItem("adminToken");
    setAdminToken("");
    toast.success("Admin Logged out Successfully");
    navigate("/admin");
    window.history.pushState(null, "", "/admin");
  };

  // ✅ Updated route: Get all users
  const fetchAllUsers = async () => {
    try {
      const { data } = await adminAxios.get("/api/admins/allUsers");
      return data.users || [];
    } catch (error) {
      toast.error("Failed to fetch users");
      return [];
    }
  };

  // ✅ Updated route: Delete user
  const deleteUserById = async (userId) => {
    try {
      const { data } = await adminAxios.delete(`/api/admins/deleteUser/${userId}`);
      toast.success(data.message || "User deleted");
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete user");
      return false;
    }
  };

  // ✅ Updated route: Get all blogs
  const fetchAllBlogs = async () => {
    try {
      const { data } = await adminAxios.get("/api/admins/allblogs");
      return data.blogs || [];
    } catch (error) {
      toast.error("Failed to fetch blogs");
      return [];
    }
  };

  // ✅ Updated route: Delete blog
  const deleteBlogById = async (blogId) => {
    try {
      const { data } = await adminAxios.delete(`/api/admins/deleteBlog/${blogId}`);
      toast.success(data.message || "Blog deleted");
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete blog");
      return false;
    }
  };

  // ✅ Updated route: Get all comments
  const fetchAllComments = async () => {
    try {
      const { data } = await adminAxios.get("/api/admins/allComments");
      return data.comments || [];
    } catch (error) {
      toast.error("Failed to fetch comments");
      return [];
    }
  };

  // ✅ Updated route: Delete comment
  const deleteCommentById = async (commentId) => {
    try {
      const { data } = await adminAxios.delete(`/api/admins/deleteComments/${commentId}`);
      toast.success(data.message || "Comment deleted");
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete comment");
      return false;
    }
  };

  return (
    <AdminContext.Provider
      value={{
        adminToken,
        loginAdmin,
        logoutAdmin,
        fetchAllUsers,
        deleteUserById,
        fetchAllBlogs,
        deleteBlogById,
        fetchAllComments,
        deleteCommentById,
        adminAxios,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};