import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js';
import Blog from '../models/blogModel.js';
import Comment from '../models/commentModel.js';

export const adminLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ success : false, message : "Invalid Credentials"})
        }

        const token = jwt.sign({email}, process.env.JWT_SECRET)
        res.status(200).json({ success : true, message : "Token generated Successfully", token})
    } catch (error) {
        res.status(500).json({ success : false, message : "Server Error", error : error.message});
    }
}

export const UserList = async (req, res) => {
    try {
        const users = await userModel.find().select("-password");
        res.status(200).json({ success : true, message : "All user details fetched successfully", users})
    } catch (error) {
        res.status(500).json({ success : true, message : "Failed to fetch the users", error : error.message});
    }
}

export const userDeleted = async (req, res) => {
  const { id } = req.params; // 🔥 Accept ID from URL path

  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    await userModel.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};


export const allBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({isPublished: true})
        res.status(200).json({ success : true, message : "All blogs data fetched successfully", blogs});
    } catch (error) {
        res.status(500).json({ success : false, message : "Server Error", error : error.message});
    }
}

export const deleteBlogs = async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findById(id);
        if(!blog) {
            return res.status(404).json({ success : false, message : "Blog post not found"})
        }

        await Blog.findByIdAndDelete(id);
        res.status(200).json({ success : true, message : "Blog post deleted successfully"});
    } catch (error) {
        res.status(500).json({ success : true, message : "Server Error", error: error.message});
    }
}

export const blogComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate("blog", "title").sort({ createdAt: -1 }); // Optional: sort newest first

    res.status(200).json({
      success: true,
      message: "All comments fetched successfully",
      comments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching comments",
      error: error.message,
    });
  }
};


export const deleteBlogComments = async (req, res) => {
  const { id } = req.params; // expects ID from the URL path

  try {
    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }

    await Comment.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while deleting comment",
      error: error.message,
    });
  }
};


